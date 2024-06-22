import { useSuspenseQuery } from '@tanstack/react-query';
import users from '../../../mocks/users/users.json';
import { CurrentUserReturn } from '../use-user/types';
import mockAvatar from '../../../mocks/users/assets/avatar.png';
import mockCover from '../../../mocks/users/assets/cover.png';

export const useCurrentUser = (): CurrentUserReturn => {
  return useSuspenseQuery({
    queryKey: ['currentUser'],
    queryFn: () => ({
      ...users.users[0],
      image: users.users[0].image || mockAvatar,
      profileBackground: mockCover,
    }),
  });
};
