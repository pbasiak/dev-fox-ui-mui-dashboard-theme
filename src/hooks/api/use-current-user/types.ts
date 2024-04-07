import { UseQueryResult } from '@tanstack/react-query';
import { User } from '../../../types/user/userTypes';

export type UserReturn = UseQueryResult<User>;
