import { UseQueryResult } from '@tanstack/react-query';

export interface User {
  id: number | null;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
}

export type UserReturn = UseQueryResult & {
  user: User;
}