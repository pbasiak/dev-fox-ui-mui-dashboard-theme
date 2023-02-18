import { Button, Paper, Stack, Typography } from '@mui/material';
import { Edit, Message, Photo } from '@mui/icons-material';

import { UserAvatar } from '../../../../components/user-avatar/UserAvatar';
import { User } from '../../../../types/user/userTypes';

export const UserProfileHeader = ({user}: {user:User}) => {

  return (
    <Stack>
      <Paper sx={{ background: `url(${user.profileBackground})`, backgroundSize: 'cover', height: '300px', padding: 2 }}>
        <Stack justifyContent={'flex-end'} alignItems={'flex-end'} height={'100%'}>
          <Button startIcon={<Photo />} variant={'contained'} color={'secondary'}>Add photo</Button>
        </Stack>
      </Paper>

      <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'space-between'} sx={{ paddingBottom: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Stack marginTop={2} spacing={2} direction={'row'} alignItems={'center'}>
          <UserAvatar sx={{ width: '120px', height: '120px' }} />
          <Stack>
            <Typography fontWeight={'600'} fontSize={22}>{user.firstName} {user.lastName}</Typography>
            <Typography fontWeight={'400'} fontSize={14}>{user.company.department}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} direction={'row'}>
          <Button startIcon={<Message />} variant={'contained'}>Send message</Button>
          <Button startIcon={<Edit />} variant={'contained'} color={'secondary'}>Edit profile</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}