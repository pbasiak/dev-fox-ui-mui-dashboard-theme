import { useQuery } from '@tanstack/react-query';
import users from '../../../mocks/users.json';
import { UserReturn } from './types';

export const useUser = (): UserReturn => {
  const result = useQuery({queryKey: ['user'], queryFn: () => users});
  const user = result?.data?.users[0];

  return {
    user: {
      id: user?.id || null,
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      image: user?.image || '',
      email: user?.email || '',
      phone: user?.phone || '',
      username: user?.username || '',
      birthDate: user?.birthDate || '',
    },
    ...result
  }
}