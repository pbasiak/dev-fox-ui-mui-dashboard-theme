import { Box, IconButton, Menu, MenuItem, styled } from '@mui/material';

export const UserMenuContainer = styled(Box)(() => ({
}))


export const UserMenuIconButton = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: `2px solid ${theme.palette.divider}`,

  '& img': {
    width: '100%',
  }
}))

export const UserMenuMenu = styled(Menu)(({ theme }) => ({
  padding: 0,
  marginTop: theme.spacing(1)

}))

export const UserMenuMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  fontSize: '14px',
  minWidth: '160px',
  margin: theme.spacing(0, 1),
}))

export const UserMenuInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2,3),
  marginBottom: theme.spacing(1),
  borderBottom: `1px dashed #D2D2D2`,
}))