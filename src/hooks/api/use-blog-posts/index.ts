import { useQuery } from '@tanstack/react-query';
import posts from '../../../mocks/blog/blog-posts.json';

export const useBlogPosts = () => {
  return useQuery({queryKey: ['blog-posts'], queryFn: () => posts.posts});
}