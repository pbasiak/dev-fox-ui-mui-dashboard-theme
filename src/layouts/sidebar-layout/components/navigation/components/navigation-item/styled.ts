import { ListItemButton, ListItemIcon, styled } from '@mui/material';
import { indigo } from '@mui/material/colors';

interface NavigationListItemButtonProps {
  active?: boolean;
  nested?: boolean;
}

export const NavigationListItemButton = styled(ListItemButton, { shouldForwardProp: prop => prop !== 'active' && prop !== 'nested' })<NavigationListItemButtonProps>(({ theme, active, nested }) => ({
  borderRadius: theme.shape.borderRadius,
  paddingLeft: nested ? theme.spacing(3) : theme.spacing(2),
  paddingTop: nested ? theme.spacing(0.5) : theme.spacing(1),
  paddingBottom: nested ? theme.spacing(0.5) : theme.spacing(1),
  marginBottom: theme.spacing(1),
  position: 'relative',

  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? indigo[50] : indigo[900],
  },
  ...(active && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    '.MuiSvgIcon-root': {
      color: theme.palette.primary.contrastText,
    },

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      '.MuiSvgIcon-root': {
        color: theme.palette.primary.contrastText,
      },
    }
  }),
}))

export const NavigationListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '42px',
  fontSize: '0.5rem',
  color: theme.palette.text.primary
}))

export const NavigationListItemNestedIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '34px',
  fontSize: '0.5rem',
  color: theme.palette.text.primary
}))