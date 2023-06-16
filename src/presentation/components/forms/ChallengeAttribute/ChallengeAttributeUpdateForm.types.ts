import { FormController } from "../FormController";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrorsImpl,
  DeepRequired,
  UseFormWatch,
} from "react-hook-form";

export type ChallengeAttributeUpdateFormModel = {
  name: string;
  points: number;
};

export type ChallengeAttributeUpdateFormState = {
  errors: FieldErrorsImpl<DeepRequired<ChallengeAttributeUpdateFormModel>>;
};

export type ChallengeAttributeUpdateFormActions = {
  register: UseFormRegister<ChallengeAttributeUpdateFormModel>;
  watch: UseFormWatch<ChallengeAttributeUpdateFormModel>;
  handleSubmit: UseFormHandleSubmit<ChallengeAttributeUpdateFormModel>;
  submit: (body: ChallengeAttributeUpdateFormModel) => void;
};
export type ChallengeAttributeUpdateFormComputed = {
  defaultValues: ChallengeAttributeUpdateFormModel;
  isSubmitting: boolean;
};

export type ChallengeAttributeUpdateFormController = FormController<
  ChallengeAttributeUpdateFormState,
  ChallengeAttributeUpdateFormActions,
  ChallengeAttributeUpdateFormComputed
>;
