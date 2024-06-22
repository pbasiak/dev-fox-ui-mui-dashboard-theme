import { useSuspenseQuery } from '@tanstack/react-query';
import posts from '../../../mocks/user-posts.json';
import { UserPostsReturn } from './types';

export const useUserPosts = (): UserPostsReturn => {
  return useSuspenseQuery({ queryKey: ['userPosts'], queryFn: () => posts.posts });
};
