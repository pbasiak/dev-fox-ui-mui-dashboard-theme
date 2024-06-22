import { useSuspenseQuery } from '@tanstack/react-query';
import posts from '../../../mocks/blog/blog-posts.json';
import { BlogPost } from '../../../pages/blog/blog-page/types/blogPost.ts';

import post1 from '../../../mocks/blog/assets/post1.png';
import post2 from '../../../mocks/blog/assets/post2.png';
import post3 from '../../../mocks/blog/assets/post3.png';
import post4 from '../../../mocks/blog/assets/post4.png';
import post5 from '../../../mocks/blog/assets/post5.png';
import post6 from '../../../mocks/blog/assets/post6.png';

const images = [post1, post2, post3, post4, post5, post6];

export const useBlogPosts = () => {
  const mappedPosts = posts.posts.map((post, index) => ({ ...post, image: images[index] ?? '' }));
  return useSuspenseQuery<BlogPost[]>({
    queryKey: ['blog-posts'],
    queryFn: () => mappedPosts,
  });
};
