import { UseSuspenseQueryResult } from '@tanstack/react-query';
import { UserPost } from '../../../types/user/userPostsTypes';

export type UserPostsReturn = UseSuspenseQueryResult<UserPost[]>;
