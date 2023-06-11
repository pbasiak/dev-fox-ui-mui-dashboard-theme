import { ListItemButton, ListItemIcon, styled } from '@mui/material';
import { Colors } from '../../../../../../theme/theme';

interface NavigationListItemButtonProps {
  active?: boolean;
  nested?: boolean;
}

export const NavigationListItemButton = styled(ListItemButton)<NavigationListItemButtonProps>(({ theme, active, nested }) => ({
  color: Colors.buttonText,
  borderRadius: theme.shape.borderRadius,
  paddingLeft: nested ? theme.spacing(8) : theme.spacing(2),
  paddingTop: nested ? theme.spacing(0.5) : theme.spacing(1),
  paddingBottom: nested ? theme.spacing(0.5) : theme.spacing(1),
  marginBottom: theme.spacing(1),
  position: 'relative',
  '.MuiSvgIcon-root': {
    color: Colors.icon,
    transition: `color 0.2s ${theme.transitions.easing.easeInOut}`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: theme.spacing(5),
    display: nested ? 'block' : 'none',
    transform: 'translateY(-50%)',
    width: '5px',
    height: '5px',
    backgroundColor: active ? theme.palette.primary.main : Colors.icon,
    borderRadius: '40%',
  },
  '&:hover': {
    backgroundColor: Colors.buttonBackgroundHover,
    color: Colors.buttonTextHover,

    '.MuiSvgIcon-root': {
      color: Colors.iconHover,
    },
  },
  ...(active && {
    backgroundColor: Colors.buttonBackgroundActive,
    color: Colors.buttonTextActive,

    '.MuiSvgIcon-root': {
      color: Colors.iconActive,
    },
  }),
}))

export const NavigationListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '42px',
}))