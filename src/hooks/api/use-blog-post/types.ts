import { UseQueryResult } from '@tanstack/react-query';

interface BlogPostResponse {
  title: string;
  description: string;
  content: string;
  image: string;
}

export type BlogPostType = UseQueryResult<BlogPostResponse>;
