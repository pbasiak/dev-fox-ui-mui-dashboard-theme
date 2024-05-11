import { styled } from '@mui/material/styles';
import { MenuItem } from '@mui/material';
import { NotificationStatus } from '../../../../hooks/api/use-notifications/useNotifications.ts';

export const NotificationsMenuItem = styled(MenuItem, { shouldForwardProp: (prop) => prop !== 'status' })<{
  status: NotificationStatus;
}>(({ theme, status }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  backgroundColor: status === NotificationStatus.Unread ? theme.palette.primary.light : 'none',
  marginBottom: theme.spacing(0.5),
  transition: theme.transitions.create(['color', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.short,
  }),
}));
