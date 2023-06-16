import { useAppSelector } from "@application/store";
import {
  ApiChallengeProgressGetByCurrentUserGetRequest,
  ChallengeProgressAddDTO,
  ChallengeProgressApi,
  ChallengeProgressUpdateDTO,
} from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */
const getChallengeUserProgressQueryKey = "getChallengeUserProgressQuery";
const getChallengeProgressQueryKey = "getChallengeProgressQuery";
const addChallengeProgressMutationKey = "addChallengeProgressMutation";
const deleteChallengeProgressMutationKey = "deleteChallengeProgressMutation";
const updateChallengeProgressMutationKey = "updateChallengeProgressMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the ChallengeProgress API.
 */
export const useChallengeProgressApi = () => {
  const { token } = useAppSelector((x) => x.profileReducer); // You can use the data form the Redux storage.
  const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

  const getChallengeUserProgress = (
    page: ApiChallengeProgressGetByCurrentUserGetRequest
  ) =>
    new ChallengeProgressApi(config).apiChallengeProgressGetByCurrentUserGet(
      page
    ); // Use the generated client code and adapt it.
  const getChallengeProgress = (id: string) =>
    new ChallengeProgressApi(config).apiChallengeProgressGetByIdIdGet({
      id,
    });
  const addChallengeProgress = (ChallengeProgress: ChallengeProgressAddDTO) =>
    new ChallengeProgressApi(config).apiChallengeProgressAddPost({
      challengeProgressAddDTO: ChallengeProgress,
    });
  const deleteChallengeProgress = (id: string) =>
    new ChallengeProgressApi(config).apiChallengeProgressDeleteByIdIdDelete({
      id,
    });

  const updateChallengeProgress = (
    challengeProgress: ChallengeProgressUpdateDTO
  ) =>
    new ChallengeProgressApi(config).apiChallengeProgressUpdatePut({
      challengeProgressUpdateDTO: challengeProgress,
    });

  return {
    getChallengeUserProgress: {
      // Return the query object.
      key: getChallengeUserProgressQueryKey, // Add the key to identify the query.
      query: getChallengeUserProgress, // Add the query callback.
    },
    getChallengeProgress: {
      key: getChallengeProgressQueryKey,
      query: getChallengeProgress,
    },
    addChallengeProgress: {
      // Return the mutation object.
      key: addChallengeProgressMutationKey, // Add the key to identify the mutation.
      mutation: addChallengeProgress, // Add the mutation callback.
    },
    deleteChallengeProgress: {
      key: deleteChallengeProgressMutationKey,
      mutation: deleteChallengeProgress,
    },
    updateChallengeProgress: {
      key: updateChallengeProgressMutationKey,
      mutation: updateChallengeProgress,
    },
  };
};
