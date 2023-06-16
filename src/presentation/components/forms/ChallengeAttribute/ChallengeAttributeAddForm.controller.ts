import {
  ChallengeAttributeAddFormController,
  ChallengeAttributeAddFormModel,
} from "./ChallengeAttributeAddForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIntl } from "react-intl";
import * as yup from "yup";
import { isUndefined } from "lodash";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useChallengeAttributeApi } from "@infrastructure/apis/api-management";
import { useCallback } from "react";
import { SelectChangeEvent } from "@mui/material";

/**
 * Use a function to return the default values of the form and the validation schema.
 * You can add other values as the default, for example when populating the form with data to update an entity in the backend.
 */
const getDefaultValues = (initialData?: ChallengeAttributeAddFormModel) => {
  const defaultValues = {
    name: "",
    points: 0,
  };

  if (!isUndefined(initialData)) {
    return {
      ...defaultValues,
      ...initialData,
    };
  }

  return defaultValues;
};

/**
 * Create a hook to get the validation schema.
 */
const useInitChallengeAttributeAddForm = () => {
  const { formatMessage } = useIntl();
  const defaultValues = getDefaultValues();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required(
        formatMessage(
          { id: "globals.validations.requiredField" },
          {
            fieldName: formatMessage({
              id: "globals.name",
            }),
          }
        )
      )
      .default(defaultValues.name),
    points: yup
      .number()
      .required(
        formatMessage(
          { id: "globals.validations.requiredField" },
          {
            fieldName: formatMessage({
              id: "globals.points",
            }),
          }
        )
      )
      .default(defaultValues.points),
  });

  const resolver = yupResolver(schema);

  return { defaultValues, resolver };
};

/**
 * Create a controller hook for the form and return any data that is necessary for the form.
 */
export const useChallengeAttributeAddFormController = (
  onSubmit?: () => void
): ChallengeAttributeAddFormController => {
  const { defaultValues, resolver } = useInitChallengeAttributeAddForm();
  const {
    addChallengeAttribute: { mutation, key: mutationKey },
    getChallengeAttributes: { key: queryKey },
  } = useChallengeAttributeApi();
  const { mutateAsync: add, status } = useMutation([mutationKey], mutation);
  const queryClient = useQueryClient();
  const submit = useCallback(
    (
      data: ChallengeAttributeAddFormModel // Create a submit callback to send the form data to the backend.
    ) =>
      add(data).then(() => {
        queryClient.invalidateQueries([queryKey]); // If the form submission succeeds then some other queries need to be refresh so invalidate them to do a refresh.

        if (onSubmit) {
          onSubmit();
        }
      }),
    [add, queryClient, queryKey]
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ChallengeAttributeAddFormModel>({
    // Use the useForm hook to get callbacks and variables to work with the form.
    defaultValues, // Initialize the form with the default values.
    resolver, // Add the validation resolver.
  });

  return {
    actions: {
      // Return any callbacks needed to interact with the form.
      handleSubmit, // Add the form submit handle.
      submit, // Add the submit handle that needs to be passed to the submit handle.
      register, // Add the variable register to bind the form fields in the UI with the form variables.
      watch, // Ad
    },
    computed: {
      defaultValues,
      isSubmitting: status === "loading", // Return if the form is still submitting or nit.
    },
    state: {
      errors, // Return what errors have occurred when validating the form input.
    },
  };
};
