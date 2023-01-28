import { ListItemButton, ListItemIcon, styled } from '@mui/material';
import { Colors } from '../../../../../../theme/theme';

export const NavigationListItemButton = styled(ListItemButton)(({ theme }) => ({
  // backgroundColor: Colors.sidebarButtonBackgroundColor,
  color: Colors.sidebarButtonTextColor,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  '.MuiSvgIcon-root': {
    color: Colors.sidebarIconColor,
    transition: `color 0.2s ${theme.transitions.easing.easeInOut}`,
  },
  '&:hover': {
    backgroundColor: Colors.sidebarButtonBackgroundColorHover,

    '.MuiSvgIcon-root': {
      color: Colors.sidebarIconColorHover,
    },
  }
}))

export const NavigationListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '42px',
}))