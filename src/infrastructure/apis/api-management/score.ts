import { useAppSelector } from "@application/store";
import {
  ChallengeLogicApi,
  ApiChallengeLogicGetScoresForCurrentUserGetRequest,
} from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */
const getScoresQueryKey = "getScoresQuery";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the Score API.
 */
export const useScoreApi = () => {
  const { token } = useAppSelector((x) => x.profileReducer); // You can use the data form the Redux storage.
  const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

  const getScores = (
    page: ApiChallengeLogicGetScoresForCurrentUserGetRequest
  ) =>
    new ChallengeLogicApi(config).apiChallengeLogicGetScoresForCurrentUserGet(
      page
    ); // Use the generated client code and adapt it.

  return {
    getScores: {
      // Return the query object.
      key: getScoresQueryKey, // Add the key to identify the query.
      query: getScores, // Add the query callback.
    },
  };
};
