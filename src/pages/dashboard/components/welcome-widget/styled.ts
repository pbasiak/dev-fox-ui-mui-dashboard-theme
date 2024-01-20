import { Box, styled } from '@mui/material';
import { blue } from '@mui/material/colors';

export const WelcomeWidgetContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? blue[100] : theme.palette.primary.dark,
  backgroundSize: 'cover',
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2, 6),
  minHeight: '235px',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
}));

export const WelcomeWidgetContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  boxShadow: 'inner',
  zIndex: 2,
}));