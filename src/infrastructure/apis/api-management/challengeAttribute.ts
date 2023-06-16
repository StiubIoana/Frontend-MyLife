import { useAppSelector } from "@application/store";
import {
  ApiChallengeAttributeGetPageGetRequest,
  ChallengeAttributeAddDTO,
  ChallengeAttributeApi,
  ChallengeAttributeUpdateDTO,
} from "../client";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

/**
 * Use constants to identify mutations and queries.
 */
const getChallengeAttributesQueryKey = "getChallengeAttributesQuery";
const getChallengeAttributeQueryKey = "getChallengeAttributeQuery";
const addChallengeAttributeMutationKey = "addChallengeAttributeMutation";
const deleteChallengeAttributeMutationKey = "deleteChallengeAttributeMutation";
const updateChallengeAttributeMutationKey = "updateChallengeAttributeMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the ChallengeAttribute API.
 */
export const useChallengeAttributeApi = () => {
  const { token } = useAppSelector((x) => x.profileReducer); // You can use the data form the Redux storage.
  const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

  const getChallengeAttributes = (
    page: ApiChallengeAttributeGetPageGetRequest
  ) => new ChallengeAttributeApi(config).apiChallengeAttributeGetPageGet(page); // Use the generated client code and adapt it.
  const getChallengeAttribute = (id: string) =>
    new ChallengeAttributeApi(config).apiChallengeAttributeGetByIdIdGet({
      id,
    });
  const addChallengeAttribute = (
    ChallengeAttribute: ChallengeAttributeAddDTO
  ) =>
    new ChallengeAttributeApi(config).apiChallengeAttributeAddPost({
      challengeAttributeAddDTO: ChallengeAttribute,
    });
  const deleteChallengeAttribute = (id: string) =>
    new ChallengeAttributeApi(config).apiChallengeAttributeDeleteIdDelete({
      id,
    });

  const updateChallengeAttribute = (
    challengeAttribute: ChallengeAttributeUpdateDTO
  ) =>
    new ChallengeAttributeApi(config).apiChallengeAttributeUpdatePut({
      challengeAttributeUpdateDTO: challengeAttribute,
    });

  return {
    getChallengeAttributes: {
      // Return the query object.
      key: getChallengeAttributesQueryKey, // Add the key to identify the query.
      query: getChallengeAttributes, // Add the query callback.
    },
    getChallengeAttribute: {
      key: getChallengeAttributeQueryKey,
      query: getChallengeAttribute,
    },
    addChallengeAttribute: {
      // Return the mutation object.
      key: addChallengeAttributeMutationKey, // Add the key to identify the mutation.
      mutation: addChallengeAttribute, // Add the mutation callback.
    },
    deleteChallengeAttribute: {
      key: deleteChallengeAttributeMutationKey,
      mutation: deleteChallengeAttribute,
    },
    updateChallengeAttribute: {
      key: updateChallengeAttributeMutationKey,
      mutation: updateChallengeAttribute,
    },
  };
};
