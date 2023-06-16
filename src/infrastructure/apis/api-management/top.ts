import { useAppSelector } from "@application/store";
import {
  ChallengeLogicApi,
  ApiChallengeLogicGetAllAttributeScoresGetRequest,
} from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */
const getTopsQueryKey = "getTopsQuery";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the Top API.
 */
export const useTopApi = () => {
  const { token } = useAppSelector((x) => x.profileReducer); // You can use the data form the Redux storage.
  const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

  const getTops = (page: ApiChallengeLogicGetAllAttributeScoresGetRequest) =>
    new ChallengeLogicApi(config).apiChallengeLogicGetAllAttributeScoresGet(
      page
    ); // Use the generated client code and adapt it.

  return {
    getTops: {
      // Return the query object.
      key: getTopsQueryKey, // Add the key to identify the query.
      query: getTops, // Add the query callback.
    },
  };
};
