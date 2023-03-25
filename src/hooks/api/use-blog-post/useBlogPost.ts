import { useQuery } from '@tanstack/react-query';
import blogPost from '../../../mocks/blog/blog-post.json';
import { BlogPostType } from './types';

export const useBlogPost = (): BlogPostType => {
  return useQuery({queryKey: ['blogPost'], queryFn: () => blogPost});
}