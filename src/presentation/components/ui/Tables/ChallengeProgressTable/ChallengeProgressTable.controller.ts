import { useTableController } from "../Table.controller";
import { useChallengeProgressApi } from "@infrastructure/apis/api-management";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { usePaginationController } from "../Pagination.controller";

/**
 * This is controller hook manages the table state including the pagination and data retrieval from the backend.
 */
export const useChallengeProgressTableController = () => {
  const {
    getChallengeUserProgress: { key: queryKey, query },
    deleteChallengeProgress: {
      key: deleteChallengeProgressKey,
      mutation: deleteChallengeProgress,
    },
  } = useChallengeProgressApi(); // Use the API hook.
  const queryClient = useQueryClient(); // Get the query client.
  const { page, pageSize, setPagination } = usePaginationController(); // Get the pagination state.
  const { data, isError, isLoading } = useQuery(
    [queryKey, page, pageSize],
    () => query({ page, pageSize })
  ); // Retrieve the table page from the backend via the query hook.
  const { mutateAsync: deleteMutation } = useMutation(
    [deleteChallengeProgressKey],
    deleteChallengeProgress
  ); // Use a mutation to remove an entry.
  const remove = useCallback(
    (id: string) =>
      deleteMutation(id).then(() => queryClient.invalidateQueries([queryKey])),
    [queryClient, deleteMutation, queryKey]
  ); // Create the callback to remove an entry.

  const tryReload = useCallback(
    () => queryClient.invalidateQueries([queryKey]),
    [queryClient, queryKey]
  ); // Create a callback to try reloading the data for the table via query invalidation.

  const tableController = useTableController(
    setPagination,
    data?.response?.pageSize
  ); // Adapt the pagination for the table.

  return {
    // Return the controller state and actions.
    ...tableController,
    tryReload,
    pagedUserData: data?.response,
    isError,
    isLoading,
    remove,
  };
};
