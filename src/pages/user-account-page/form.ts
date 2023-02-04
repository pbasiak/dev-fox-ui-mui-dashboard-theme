import * as yup from "yup";

export enum AccountFieldsNames {
  firstName = "firstName",
  lastName = "lastName",
  username = "username",
  email = "email",
  phone = "phone",
  birthDate = "birthDate",
}

export const accountSchema = yup.object({
  [AccountFieldsNames.firstName]: yup.string().required(),
  [AccountFieldsNames.lastName]: yup.string().required(),
  [AccountFieldsNames.username]: yup.string().required(),
  [AccountFieldsNames.email]: yup.string().email().required(),
  [AccountFieldsNames.phone]: yup.string().required(),
  [AccountFieldsNames.birthDate]: yup.string().required(),
}).required();

export type AccountFormValues = yup.InferType<typeof accountSchema>;