import { FormController } from "../FormController";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrorsImpl,
  DeepRequired,
  UseFormWatch,
} from "react-hook-form";

export type ChallengeAttributeAddFormModel = {
  name: string;
  points: number;
};

export type ChallengeAttributeAddFormState = {
  errors: FieldErrorsImpl<DeepRequired<ChallengeAttributeAddFormModel>>;
};

export type ChallengeAttributeAddFormActions = {
  register: UseFormRegister<ChallengeAttributeAddFormModel>;
  watch: UseFormWatch<ChallengeAttributeAddFormModel>;
  handleSubmit: UseFormHandleSubmit<ChallengeAttributeAddFormModel>;
  submit: (body: ChallengeAttributeAddFormModel) => void;
};
export type ChallengeAttributeAddFormComputed = {
  defaultValues: ChallengeAttributeAddFormModel;
  isSubmitting: boolean;
};

export type ChallengeAttributeAddFormController = FormController<
  ChallengeAttributeAddFormState,
  ChallengeAttributeAddFormActions,
  ChallengeAttributeAddFormComputed
>;
