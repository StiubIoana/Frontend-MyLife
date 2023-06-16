import { useAppSelector } from "@application/store";
import {
  ApiChallengeGetPageGetRequest,
  ChallengeWithAttributesAddDTO,
  ChallengeApi,
  ChallengeUpdateDTO,
} from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */
const getChallengesQueryKey = "getChallengesQuery";
const getChallengeQueryKey = "getChallengeQuery";
const addChallengeMutationKey = "addChallengeMutation";
const deleteChallengeMutationKey = "deleteChallengeMutation";
const updateChallengeMutationKey = "updateChallengeMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the Challenge API.
 */
export const useChallengeApi = () => {
  const { token } = useAppSelector((x) => x.profileReducer); // You can use the data form the Redux storage.
  const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

  const getChallenges = (page: ApiChallengeGetPageGetRequest) =>
    new ChallengeApi(config).apiChallengeGetPageGet(page); // Use the generated client code and adapt it.
  const getChallenge = (id: string) =>
    new ChallengeApi(config).apiChallengeGetChallengeWithAttributesIdGet({
      id,
    });
  const addChallenge = (Challenge: ChallengeWithAttributesAddDTO) =>
    new ChallengeApi(config).apiChallengeAddChallengeWithAttributesPost({
      challengeWithAttributesAddDTO: Challenge,
    });
  const deleteChallenge = (id: string) =>
    new ChallengeApi(config).apiChallengeDeleteIdDelete({ id });

  const updateChallenge = (challenge: ChallengeUpdateDTO) =>
    new ChallengeApi(config).apiChallengeUpdatePut({
      challengeUpdateDTO: challenge,
    });

  return {
    getChallenges: {
      // Return the query object.
      key: getChallengesQueryKey, // Add the key to identify the query.
      query: getChallenges, // Add the query callback.
    },
    getChallenge: {
      key: getChallengeQueryKey,
      query: getChallenge,
    },
    addChallenge: {
      // Return the mutation object.
      key: addChallengeMutationKey, // Add the key to identify the mutation.
      mutation: addChallenge, // Add the mutation callback.
    },
    deleteChallenge: {
      key: deleteChallengeMutationKey,
      mutation: deleteChallenge,
    },
    updateChallenge: {
      key: updateChallengeMutationKey,
      mutation: updateChallenge,
    },
  };
};
