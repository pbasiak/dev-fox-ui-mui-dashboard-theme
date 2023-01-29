import * as yup from "yup";

export enum AccountFieldsNames {
  firstName = "firstName",
  lastName = "lastName",
}

export const accountSchema = yup.object({
  [AccountFieldsNames.firstName]: yup.string().required(),
  [AccountFieldsNames.lastName]: yup.string().required(),
}).required();

export type AccountFormValues = yup.InferType<typeof accountSchema>;