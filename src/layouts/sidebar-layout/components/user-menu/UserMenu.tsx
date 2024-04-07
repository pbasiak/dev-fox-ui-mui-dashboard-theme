import {
  UserMenuContainer,
  UserMenuIconButton,
  UserMenuInfo,
  UserMenuMenu,
  UserMenuMenuItem,
  UserMenuMenuItemWithSeparator,
} from './styled';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { User } from '../../../../types/user/userTypes';
import { UserAvatar } from '../../../../components/user-avatar/UserAvatar';

export const UserMenu = ({ user }: { user: User }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <UserMenuContainer>
      <UserMenuIconButton sx={{ padding: 0 }} onClick={handleClick}>
        <UserAvatar src={user.image} />
      </UserMenuIconButton>
      <UserMenuMenu
        id='user-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <UserMenuInfo>
          <Typography fontSize={14} color={'text.secondary'}>
            {user.email}
          </Typography>
        </UserMenuInfo>
        <UserMenuMenuItem onClick={handleClose}>Profile</UserMenuMenuItem>
        <UserMenuMenuItem onClick={handleClose}>My account</UserMenuMenuItem>
        <UserMenuMenuItemWithSeparator onClick={handleClose}>Logout</UserMenuMenuItemWithSeparator>
      </UserMenuMenu>
    </UserMenuContainer>
  );
};
