import { useQuery } from '@tanstack/react-query';
import blogPost from '../../../mocks/blog/blog-post.json';

export const useApp = () => {
  return useQuery({ queryKey: ['blogPost'], queryFn: () => blogPost });
};
