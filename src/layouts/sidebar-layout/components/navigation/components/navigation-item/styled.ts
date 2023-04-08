import { ListItemButton, ListItemIcon, styled } from '@mui/material';
import { Colors } from '../../../../../../theme/theme';

interface NavigationListItemButtonProps {
  active?: boolean;
  nested?: boolean;
}

export const NavigationListItemButton = styled(ListItemButton)<NavigationListItemButtonProps>(({ theme, active, nested }) => ({
  color: Colors.sidebarButtonTextColor,
  borderRadius: theme.shape.borderRadius,
  paddingLeft: nested ? theme.spacing(8) : theme.spacing(2),
  paddingTop: nested ? theme.spacing(0.5) : theme.spacing(1),
  paddingBottom: nested ? theme.spacing(0.5) : theme.spacing(1),
  marginBottom: theme.spacing(1),
  position: 'relative',
  '.MuiSvgIcon-root': {
    color: Colors.sidebarIconColor,
    transition: `color 0.2s ${theme.transitions.easing.easeInOut}`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: theme.spacing(5),
    display: nested ? 'block' : 'none',
    transform: 'translateY(-50%)',
    width: '4px',
    height: '4px',
    backgroundColor: active ? theme.palette.primary.main : Colors.sidebarIconColor,
    borderRadius: theme.shape.borderRadius,
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

    '.MuiSvgIcon-root': {
      color: Colors.sidebarIconColorActive,
    },
  }),
}))

export const NavigationListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '42px',
}))