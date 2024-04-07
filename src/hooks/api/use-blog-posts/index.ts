import { useQuery } from '@tanstack/react-query';
import posts from '../../../mocks/blog/blog-posts.json';
import { BlogPost } from '../../../pages/blog/blog-page/types/blogPost.ts';

export const useBlogPosts = () => {
  return useQuery<BlogPost[]>({ queryKey: ['blog-posts'], queryFn: () => posts.posts });
};
