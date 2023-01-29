import { UseQueryResult } from '@tanstack/react-query';

export interface User {
  id: number | null;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
}

export type UserReturn = UseQueryResult & {
  user: User;
}