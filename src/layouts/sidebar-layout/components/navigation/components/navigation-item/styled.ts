import { ListItemButton, ListItemIcon, styled } from '@mui/material';
import { Colors } from '../../../../../../theme/theme';

interface NavigationListItemButtonProps {
  active?: boolean;
}

export const NavigationListItemButton = styled(ListItemButton)<NavigationListItemButtonProps>(({ theme, active }) => ({
  color: Colors.sidebarButtonTextColor,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  '.MuiSvgIcon-root': {
    color: Colors.sidebarIconColor,
    transition: `color 0.2s ${theme.transitions.easing.easeInOut}`,
  },
  '&:hover': {
    backgroundColor: Colors.sidebarButtonBackgroundColorHover,
    color: Colors.sidebarButtonTextColorHover,

    '.MuiSvgIcon-root': {
      color: Colors.sidebarIconColorHover,
    },
  },
  ...(active && {
    backgroundColor: Colors.sidebarButtonBackgroundColorActive,
    color: Colors.sidebarButtonTextColorActive,

    '.MuiTypography-root': {
      fontWeight: theme.typography.fontWeightBold,
    },

    '.MuiSvgIcon-root': {
      color: Colors.sidebarIconColorActive,
    },
  }),
}))

export const NavigationListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '42px',
}))