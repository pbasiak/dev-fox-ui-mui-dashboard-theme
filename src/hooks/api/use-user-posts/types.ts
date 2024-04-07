import { UseQueryResult } from '@tanstack/react-query';
import { UserPost } from '../../../types/user/userPostsTypes';

export type UserPostsReturn = UseQueryResult<UserPost[]>;
