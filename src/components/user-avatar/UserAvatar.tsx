import { Avatar, AvatarProps } from '@mui/material';
import { useCurrentUser } from '../../hooks/api/use-current-user/useCurrentUser';

export const UserAvatar = (props: AvatarProps) => {
  const { data: user } = useCurrentUser();
  return <Avatar {...props} sx={{ ...props.sx, boxShadow: 3 }} src={user?.image} />;
};

