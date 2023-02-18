import { UserMenu } from '../user-menu/UserMenu';
import { Box } from '@mui/material';
import { useCurrentUser } from '../../../../hooks/api/use-current-user/useCurrentUser';

export const ToolbarElements = () => {
  const { data: user } = useCurrentUser();

  if (!user) return null;
  return (
    <Box>
      <UserMenu user={user} />
    </Box>
  );
}