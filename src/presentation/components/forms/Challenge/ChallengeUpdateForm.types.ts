import { FormController } from "../FormController";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrorsImpl,
  DeepRequired,
  UseFormWatch,
} from "react-hook-form";

export type ChallengeUpdateFormModel = {
  title: string;
  description: string;
};

export type ChallengeUpdateFormState = {
  errors: FieldErrorsImpl<DeepRequired<ChallengeUpdateFormModel>>;
};

export type ChallengeUpdateFormActions = {
  register: UseFormRegister<ChallengeUpdateFormModel>;
  watch: UseFormWatch<ChallengeUpdateFormModel>;
  handleSubmit: UseFormHandleSubmit<ChallengeUpdateFormModel>;
  submit: (body: ChallengeUpdateFormModel) => void;
};
export type ChallengeUpdateFormComputed = {
  defaultValues: ChallengeUpdateFormModel;
  isSubmitting: boolean;
};

export type ChallengeUpdateFormController = FormController<
  ChallengeUpdateFormState,
  ChallengeUpdateFormActions,
  ChallengeUpdateFormComputed
>;
