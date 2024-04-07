import { UserMenu } from '../user-menu/UserMenu';
import { Stack, TextField } from '@mui/material';
import { useCurrentUser } from '../../../../hooks/api/use-current-user/useCurrentUser';
import { Search } from '@mui/icons-material';
import { Notifications } from '../notifications/Notifications';

export const ToolbarElements = () => {
  const { data: user } = useCurrentUser();

  if (!user) return null;
  return (
    <Stack direction={'row'} spacing={2}>
      <TextField
        variant={'outlined'}
        size={'small'}
        placeholder={'Search...'}
        InputProps={{
          endAdornment: <Search sx={{ color: 'grey.500' }} />,
        }}
      />
      <Notifications />
      <UserMenu user={user} />
    </Stack>
  );
};
