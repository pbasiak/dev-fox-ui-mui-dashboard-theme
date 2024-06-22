import { useSuspenseQuery } from '@tanstack/react-query';
import blogPost from '../../../mocks/blog/blog-post.json';
import { BlogPostType } from './types';
import post1 from '../../../mocks/blog/assets/post1.png';

export const useBlogPost = (): BlogPostType => {
  return useSuspenseQuery({
    queryKey: ['blogPost'],
    queryFn: () => ({
      ...blogPost,
      image: post1,
    }),
  });
};
