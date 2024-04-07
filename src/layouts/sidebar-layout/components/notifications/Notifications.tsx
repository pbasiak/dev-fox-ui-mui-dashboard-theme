import {
  NotificationStatus,
  NotificationType,
  useNotifications,
} from '../../../../hooks/api/use-notifications/useNotifications';
import IconButton from '@mui/material/IconButton';
import { Badge, Box, Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Event, Info, MessageOutlined, NotificationsOutlined } from '@mui/icons-material';

export const MessageContainer = styled(Box, { shouldForwardProp: (prop) => prop !== 'status' })<{
  status: NotificationStatus;
}>(({ theme, status }) => ({
  borderLeft: '2px solid transparent',
  borderColor: status === NotificationStatus.Unread ? theme.palette.primary.main : 'transparent',
  paddingLeft: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  color: status === NotificationStatus.Unread ? theme.palette.primary.main : theme.palette.text.primary,
}));

export const Notifications = () => {
  const { data: notificationsData } = useNotifications();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const unreadNotifications = notificationsData?.notifications.filter(
    (notification) => notification.status === NotificationStatus.Unread,
  );

  const notificationIcon = (type: NotificationType) => {
    switch (type) {
      case NotificationType.Message:
        return <MessageOutlined />;
      case NotificationType.Alert:
        return <NotificationsOutlined />;
      case NotificationType.Reminder:
        return <Event />;
      default:
        return <Info />;
    }
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={unreadNotifications?.length} color={'primary'}>
          <NotificationsOutlined />
        </Badge>
      </IconButton>
      <Menu
        open={open}
        id='notifications-menu'
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: { paddingBottom: 0 },
        }}
      >
        <Typography
          variant={'h6'}
          textAlign={'center'}
          padding={1}
          mb={1}
          borderColor={'grey[100]'}
          sx={{ borderBottomWidth: 1, borderBottomStyle: 'solid', borderColor: 'divider' }}
        >
          Notifications
        </Typography>
        {notificationsData?.notifications.map((notification) => (
          <MenuItem key={notification.id} sx={{ fontSize: 14, maxWidth: 320, whiteSpace: 'normal' }}>
            <MessageContainer status={notification.status}>
              {notificationIcon(notification.type)}
              <Stack ml={1}>
                <Typography variant={'body2'}>{notification.message}</Typography>
                <Typography variant={'caption'} color={'text.secondary'}>
                  {notification.timestamp}
                </Typography>
              </Stack>
            </MessageContainer>
          </MenuItem>
        ))}
        <Box mt={1}>
          <Button variant={'contained'} fullWidth size={'small'}>
            View all
          </Button>
        </Box>
      </Menu>
    </>
  );
};
