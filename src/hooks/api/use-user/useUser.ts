import { UserReturn } from '../use-current-user/types';
import { useCurrentUser } from '../use-current-user/useCurrentUser';

// @ts-expect-error TODO: this is a placeholder for the id parameter
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useUser = ({ id }: { id?: number } = {}): UserReturn => {
  return useCurrentUser();
};
