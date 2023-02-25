import { Paper, Stack, Typography } from '@mui/material';
import { Email, Home, Link, Work } from '@mui/icons-material';
import { User } from '../../../../../types/user/userTypes';

export const UserProfileInfo = ({user} : { user: User}) => {
  return (
    <Paper>
      <Stack padding={2} spacing={2}>
        <Stack spacing={2}>
          <Typography fontWeight={'bold'}>About</Typography>
          <Typography variant={'body2'}>{user.about}</Typography>
        </Stack>

        <Stack spacing={2}>
          <Stack spacing={2} direction={'row'} alignItems={'center'}>
            <Work /><Typography variant={'body2'}>Working in: <strong>{user.company.name}</strong></Typography>
          </Stack>

          <Stack spacing={2} direction={'row'} alignItems={'center'}>
            <Email /><Typography variant={'body2'}><strong>{user.email}</strong></Typography>
          </Stack>

          <Stack spacing={2} direction={'row'} alignItems={'center'}>
            <Home /><Typography variant={'body2'}>Live in: <strong>{user.address.city}</strong></Typography>
          </Stack>

          <Stack spacing={2} direction={'row'} alignItems={'center'}>
            <Link /><Typography variant={'body2'}><strong>{user.website}</strong></Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}