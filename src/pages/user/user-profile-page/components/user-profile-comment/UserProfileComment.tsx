import { Comment } from '../../../../../types/user/userPostsTypes';
import { Stack, Typography } from '@mui/material';
import { UserAvatar } from '../../../../../components/user-avatar/UserAvatar';

export const UserProfileComment = ({ comment }: {comment: Comment}) => {
  return (
    <Stack direction={'row'} spacing={2}>
      <UserAvatar src={comment.author.image} />
      {/*TODO: color from theme*/}
      <Stack sx={{ background: "#F2F2F2", borderRadius: 1, padding: 1 }} flex={1}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography fontSize={'14px'} fontWeight={'fontWeightMedium'}>{comment.author.firstName} {comment.author.lastName}</Typography>
          <Typography fontSize={'12px'}>{comment.created}</Typography>
        </Stack>
        <Typography fontSize={'14px'}>{comment.content}</Typography>
      </Stack>
    </Stack>
  );
}