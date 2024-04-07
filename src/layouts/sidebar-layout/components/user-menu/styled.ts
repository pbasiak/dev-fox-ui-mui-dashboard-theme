import { Box, IconButton, Menu, MenuItem, styled } from '@mui/material';

export const UserMenuContainer = styled(Box)(() => ({}));

export const UserMenuIconButton = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: `2px solid ${theme.palette.divider}`,

  '& img': {
    width: '100%',
  },
}));

export const UserMenuMenu = styled(Menu)(({ theme }) => ({
  marginTop: theme.spacing(1),
  '& .MuiPaper-root': {
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[0],
  },
}));

export const UserMenuMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1, 1.5),
  borderRadius: theme.shape.borderRadius,
  fontSize: '14px',
  minWidth: '160px',
}));

export const UserMenuMenuItemWithSeparator = styled(UserMenuMenuItem)(({ theme }) => ({
  position: 'relative',
  marginTop: theme.spacing(2),

  '&:before': {
    content: '""',
    position: 'absolute',
    top: theme.spacing(-1),
    left: 0,
    right: 0,
    width: '100%',
    height: '1px',
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

export const UserMenuInfo = styled('li')(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5, 1.5),
  marginBottom: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
