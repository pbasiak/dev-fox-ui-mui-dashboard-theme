import {
  NotificationStatus,
  NotificationType,
  useNotifications,
} from '../../../../hooks/api/use-notifications/useNotifications';
import IconButton from '@mui/material/IconButton';
import { Badge, Box, Button, Menu, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Event, Info, MessageOutlined, NotificationsOutlined } from '@mui/icons-material';
import { NotificationsMenuItem } from './Notifications.styled.ts';

export const MessageContainer = styled(Box, { shouldForwardProp: (prop) => prop !== 'status' })<{
  status: NotificationStatus;
}>(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
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
      <IconButton onClick={handleClick} color={'primary'}>
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
          sx: { padding: 1, gap: 2 },
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
          <NotificationsMenuItem
            key={notification.id}
            status={notification.status}
            sx={{ fontSize: 14, maxWidth: 320, whiteSpace: 'normal', borderRadius: 1 }}
          >
            <MessageContainer status={notification.status}>
              {notificationIcon(notification.type)}
              <Stack ml={1}>
                <Typography variant={'body2'} color={'inherit'}>
                  {notification.message}
                </Typography>
                <Typography variant={'caption'} color={'inherit'}>
                  {notification.timestamp}
                </Typography>
              </Stack>
            </MessageContainer>
          </NotificationsMenuItem>
        ))}
        <Box mt={1}>
          <Button variant={'contained'} fullWidth size={'medium'}>
            View all
          </Button>
        </Box>
      </Menu>
    </>
  );
};
