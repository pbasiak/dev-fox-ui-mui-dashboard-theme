import { useQuery } from '@tanstack/react-query';
import users from '../../../mocks/users.json';

export const useUser = () => {
  const result = useQuery({queryKey: ['user'], queryFn: () => users});
  const user = result?.data?.users[0];

  return { ...user }
}