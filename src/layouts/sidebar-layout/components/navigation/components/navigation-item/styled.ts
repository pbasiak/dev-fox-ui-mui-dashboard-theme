import { alpha, ListItemButton, ListItemIcon, styled } from '@mui/material';

interface NavigationListItemButtonProps {
  active?: boolean;
  nested?: boolean;
}

export const NavigationListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'nested',
})<NavigationListItemButtonProps>(({ theme, active, nested }) => ({
  borderRadius: theme.shape.borderRadius,
  paddingLeft: nested ? theme.spacing(3) : theme.spacing(2),
  paddingTop: nested ? theme.spacing(0.5) : theme.spacing(1),
  paddingBottom: nested ? theme.spacing(0.5) : theme.spacing(1),
  marginBottom: theme.spacing(1),
  position: 'relative',
  gap: theme.spacing(1),
  minHeight: nested ? '0' : '55px',

  '&:hover': {
    backgroundColor: `${alpha(theme.palette.primary.main, 0.1)}`,
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
    },
  }),
}));

export const NavigationListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '36px',
  fontSize: '0.5rem',
  color: theme.palette.text.primary,
}));

export const NavigationListItemNestedIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '24px',
  fontSize: '0.5rem',
  color: theme.palette.text.primary,
}));
