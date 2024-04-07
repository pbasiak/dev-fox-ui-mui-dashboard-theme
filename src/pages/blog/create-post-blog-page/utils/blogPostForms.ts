import * as yup from 'yup';

export enum BlogPostFieldsNames {
  title = 'title',
  description = 'description',
  content = 'content',
}

export const blogPostFormSchema = yup.object({
  [BlogPostFieldsNames.title]: yup.string().required(),
  [BlogPostFieldsNames.description]: yup.string().optional(),
  [BlogPostFieldsNames.content]: yup.array().required(),
});

export type BlogPostForm = yup.InferType<typeof blogPostFormSchema>;
