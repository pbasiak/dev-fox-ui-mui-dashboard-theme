import { ListItemButton, ListItemIcon, styled } from '@mui/material';

interface NavigationListItemButtonProps {
  active?: boolean;
  nested?: boolean;
}

export const NavigationListItemButton = styled(ListItemButton)<NavigationListItemButtonProps>(({ theme, active, nested }) => ({
  color: nested ? theme.palette.text.secondary : theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  paddingLeft: nested ? theme.spacing(8) : theme.spacing(2),
  paddingTop: nested ? theme.spacing(0.5) : theme.spacing(1),
  paddingBottom: nested ? theme.spacing(0.5) : theme.spacing(1),
  marginBottom: theme.spacing(1),
  position: 'relative',
  '.MuiSvgIcon-root': {
    color: theme.palette.primary.main,
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
    backgroundColor: active ? theme.palette.primary.contrastText : theme.palette.primary.light,
    borderRadius: '40%',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,

    '&::before': {
      backgroundColor: theme.palette.primary.contrastText,
    },

    '.MuiSvgIcon-root': {
      color: theme.palette.primary.contrastText,
    },
  },
  ...(active && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    '.MuiSvgIcon-root': {
      color: theme.palette.primary.contrastText,
    },
  }),
}))

export const NavigationListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '42px',
}))