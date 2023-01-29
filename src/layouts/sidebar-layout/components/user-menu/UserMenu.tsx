import { useUser } from '../../../../hooks/api/use-user/useUser';
import { UserMenuContainer, UserMenuIconButton, UserMenuInfo, UserMenuMenu, UserMenuMenuItem } from './styled';
import React, { useState } from 'react';
import { Typography } from '@mui/material';

export const UserMenu = () => {
  const { user } = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <UserMenuContainer>
      <UserMenuIconButton sx={{ padding: 0 }} onClick={handleClick}>
        <img src={user.image} alt={'User menu'} title='User menu' />
      </UserMenuIconButton>
      <UserMenuMenu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <UserMenuInfo>
          <Typography fontSize={14} color={'text.secondary'}>{user.email}</Typography>
        </UserMenuInfo>
        <UserMenuMenuItem onClick={handleClose}>Profile</UserMenuMenuItem>
        <UserMenuMenuItem onClick={handleClose}>My account</UserMenuMenuItem>
        <UserMenuMenuItem onClick={handleClose}>Logout</UserMenuMenuItem>
      </UserMenuMenu>
    </UserMenuContainer>
  );
}