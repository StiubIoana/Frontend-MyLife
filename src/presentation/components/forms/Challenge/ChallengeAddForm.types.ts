import { FormController } from "../FormController";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrorsImpl,
  DeepRequired,
  UseFormWatch,
} from "react-hook-form";
import { ChallengeAttributeDTO } from "@infrastructure/apis/client";

export type ChallengeAddFormModel = {
  title: string;
  description: string;
  challengeAttributeNames: string;
};

export type ChallengeAddFormState = {
  errors: FieldErrorsImpl<DeepRequired<ChallengeAddFormModel>>;
};

export type ChallengeAddFormActions = {
  register: UseFormRegister<ChallengeAddFormModel>;
  watch: UseFormWatch<ChallengeAddFormModel>;
  handleSubmit: UseFormHandleSubmit<ChallengeAddFormModel>;
  submit: (body: ChallengeAddFormModel) => void;
};
export type ChallengeAddFormComputed = {
  defaultValues: ChallengeAddFormModel;
  isSubmitting: boolean;
};

export type ChallengeAddFormController = FormController<
  ChallengeAddFormState,
  ChallengeAddFormActions,
  ChallengeAddFormComputed
>;
