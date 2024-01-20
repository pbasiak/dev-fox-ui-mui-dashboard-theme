import { Box, styled } from '@mui/material';
import { pink } from '@mui/material/colors';

export const BlogWidgetContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? pink['100'] : theme.palette.primary.dark,
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2, 6),
  minHeight: '235px',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
}));

export const BlogWidgetContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  boxShadow: 'inner',
  zIndex: 2,
}));