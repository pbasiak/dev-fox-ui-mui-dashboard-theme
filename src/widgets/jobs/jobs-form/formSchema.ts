import * as yup from 'yup';

export enum JobsFormFieldsNames {
  title = 'title',
  company = 'company',
  location = 'location',
  description = 'description',
  requirements = 'requirements',
  salary = 'salary',
}

export const jobsFormSchema = yup.object({
  [JobsFormFieldsNames.title]: yup.string().required(),
  [JobsFormFieldsNames.company]: yup.string().required(),
  [JobsFormFieldsNames.location]: yup.string().required(),
  [JobsFormFieldsNames.description]: yup.string().required(),
  [JobsFormFieldsNames.requirements]: yup.array().of(yup.string().min(2)).required(),
  [JobsFormFieldsNames.salary]: yup.string().required(),
});

export type JobsFormSchema = yup.InferType<typeof jobsFormSchema>;
