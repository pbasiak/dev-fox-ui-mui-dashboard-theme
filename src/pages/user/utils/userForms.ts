import * as yup from "yup";

export enum AccountFieldsNames {
  firstName = "firstName",
  lastName = "lastName",
  username = "username",
  email = "email",
  phone = "phone",
  image = "image",
  birthDate = "birthDate",
  age = "age",
  facebook = "facebook",
  twitter = "twitter",
  instagram = "instagram",
  linkedin = "linkedin",
}

export const accountGeneralFormSchema = yup.object({
  [AccountFieldsNames.firstName]: yup.string().required(),
  [AccountFieldsNames.lastName]: yup.string().required(),
  [AccountFieldsNames.username]: yup.string().required(),
  [AccountFieldsNames.email]: yup.string().email().required(),
  [AccountFieldsNames.phone]: yup.string().required(),
  [AccountFieldsNames.birthDate]: yup.string().required(),
  [AccountFieldsNames.age]: yup.number(),
  [AccountFieldsNames.image]: yup.string(),
});

export type AccountGeneralForm = yup.InferType<typeof accountGeneralFormSchema>;

export const accountSocialLinksFormSchema = yup.object({
  [AccountFieldsNames.facebook]: yup.string().url(),
  [AccountFieldsNames.twitter]: yup.string().url(),
  [AccountFieldsNames.instagram]: yup.string().url(),
  [AccountFieldsNames.linkedin]: yup.string().url(),
});

export type AccountSocialLinksForm = yup.InferType<typeof accountSocialLinksFormSchema>;
