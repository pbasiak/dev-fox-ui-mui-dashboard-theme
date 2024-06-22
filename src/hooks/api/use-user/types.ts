import { UseSuspenseQueryResult } from '@tanstack/react-query';
import { User } from '../../../types/user/userTypes';

export type CurrentUserReturn = UseSuspenseQueryResult<User>;
