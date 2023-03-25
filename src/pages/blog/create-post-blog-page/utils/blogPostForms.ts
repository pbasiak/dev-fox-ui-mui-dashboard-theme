import * as yup from 'yup';

export enum BlogPostFieldsNames {
  title = 'title',
  description = 'description',
  content = 'content',
  // image = 'image',
  // tags = 'tags',
  // author = 'author',
}

export const blogPostFormSchema = yup.object({
  [BlogPostFieldsNames.title]: yup.string().required(),
  [BlogPostFieldsNames.description]: yup.string().optional(),
  [BlogPostFieldsNames.content]: yup.string().required(),
  // [BlogPostFieldsNames.image]: yup.string(),
  // [BlogPostFieldsNames.tags]: yup.array().of(yup.string()),
  // [BlogPostFieldsNames.author]: yup.string().required(),
});

export type BlogPostForm = yup.InferType<typeof blogPostFormSchema>;