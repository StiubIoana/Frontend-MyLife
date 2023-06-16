import { ChallengeLogicApi } from "../client/apis";
import { useAppSelector } from "@application/store";
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";
/**
 * Use constants to identify mutations and queries.
 */
const joinMutationKey = "JoinMutation";

export const useJoinApi = () => {
  const { token } = useAppSelector((x) => x.profileReducer); // You can use the data form the Redux storage.
  const config = getAuthenticationConfiguration(token);
  const joinMutation = (body: string) =>
    new ChallengeLogicApi(config).apiChallengeLogicJoinChallengePost({ body }); // Use the generated client code and adapt it.

  return {
    JoinMutation: {
      // Return the mutation object.
      joinkey: joinMutationKey, // Add the key to identify the mutation.
      joinmutation: joinMutation, // Add the mutation callback.
    },
  };
};

const completeMutationKey = "CompleteMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case just to Jomplete the user.
 */
export const useCompleteApi = () => {
  const { token } = useAppSelector((x) => x.profileReducer); // You can use the data form the Redux storage.
  const config = getAuthenticationConfiguration(token);
  const completeMutation = (body: string) =>
    new ChallengeLogicApi(config).apiChallengeLogicCompleteChallengeDelete({
      body,
    }); // Use the generated client code and adapt it.

  return {
    CompleteMutation: {
      // Return the mutation object.
      completekey: completeMutationKey, // Add the key to identify the mutation.
      completemutation: completeMutation, // Add the mutation callback.
    },
  };
};

const quitMutationKey = "QuitMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case just to Juit the user.
 */
export const useQuitApi = () => {
  const { token } = useAppSelector((x) => x.profileReducer); // You can use the data form the Redux storage.
  const config = getAuthenticationConfiguration(token);
  const quitMutation = (body: string) =>
    new ChallengeLogicApi(config).apiChallengeLogicQuitChallengeDelete({
      body,
    }); // Use the generated client code and adapt it.

  return {
    QuitMutation: {
      // Return the mutation object.
      quitkey: quitMutationKey, // Add the key to identify the mutation.
      quitmutation: quitMutation, // Add the mutation callback.
    },
  };
};
