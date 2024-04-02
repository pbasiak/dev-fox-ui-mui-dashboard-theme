import { Box, styled } from '@mui/material';

export const BlogWidgetContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
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