import * as yup from "yup";


export enum AccountGeneralFieldsNames {
  firstName = "firstName",
  lastName = "lastName",
  username = "username",
  email = "email",
  phone = "phone",
  image = "image",
  birthDate = "birthDate",
  age = "age",
}

export enum AccountSocialFieldsNames {
  facebook = "facebook",
  twitter = "twitter",
  instagram = "instagram",
  linkedin = "linkedin",
}

export const accountGeneralFormSchema = yup.object({
  [AccountGeneralFieldsNames.firstName]: yup.string().required(),
  [AccountGeneralFieldsNames.lastName]: yup.string().required(),
  [AccountGeneralFieldsNames.username]: yup.string().required(),
  [AccountGeneralFieldsNames.email]: yup.string().email().required(),
  [AccountGeneralFieldsNames.phone]: yup.string().required(),
  [AccountGeneralFieldsNames.birthDate]: yup.string().required(),
  [AccountGeneralFieldsNames.age]: yup.number(),
  [AccountGeneralFieldsNames.image]: yup.string(),
});

export type AccountGeneralForm = yup.InferType<typeof accountGeneralFormSchema>;

export const accountSocialLinksFormSchema = yup.object({
  [AccountSocialFieldsNames.facebook]: yup.string().url(),
  [AccountSocialFieldsNames.twitter]: yup.string().url(),
  [AccountSocialFieldsNames.instagram]: yup.string().url(),
  [AccountSocialFieldsNames.linkedin]: yup.string().url(),
});

export type AccountSocialLinksForm = yup.InferType<typeof accountSocialLinksFormSchema>;
