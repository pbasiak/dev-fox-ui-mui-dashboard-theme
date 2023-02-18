import { useQuery } from '@tanstack/react-query';
import users from '../../../mocks/users.json';
import { UserReturn } from '../use-current-user/types';
import { useCurrentUser } from '../use-current-user/useCurrentUser';

export const useUser = ({ id }: { id?: number } = {}): UserReturn => {
  const { data } = useCurrentUser();
  return useQuery({queryKey: ['user'], queryFn: () => users.users.find((user) => user.id === id || user.id === data?.id)});

}