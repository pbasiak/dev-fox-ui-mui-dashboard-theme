import { useQuery } from '@tanstack/react-query';
import users from '../../../mocks/users.json';
import { CurrentUserReturn } from '../use-user/types';

export const useCurrentUser = (): CurrentUserReturn => {
  return useQuery({queryKey: ['currentUser'], queryFn: () => users.users[0]});
}