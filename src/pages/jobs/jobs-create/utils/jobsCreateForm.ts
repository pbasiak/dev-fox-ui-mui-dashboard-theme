import * as yup from 'yup';

export enum JobsCreateFieldsNames {
  title = 'title',
  company = 'company',
  location = 'location',
  description = 'description',
  requirements = 'requirements',
  salary = 'salary',
  tags = 'tags',
}

export const jobsCreateFormSchema = yup.object({
  [JobsCreateFieldsNames.title]: yup.string().required(),
  [JobsCreateFieldsNames.company]: yup.string().required(),
  [JobsCreateFieldsNames.location]: yup.string().required(),
  [JobsCreateFieldsNames.description]: yup.string().required(),
  [JobsCreateFieldsNames.requirements]: yup.array().of(yup.string().min(2)).required(),
  [JobsCreateFieldsNames.salary]: yup.string().required(),
  [JobsCreateFieldsNames.tags]: yup.array().of(yup.string().min(2)).required(),
});

export type JobsCreateForm = yup.InferType<typeof jobsCreateFormSchema>;
