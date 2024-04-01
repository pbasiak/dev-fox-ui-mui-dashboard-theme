import { Box, styled, Typography } from '@mui/material';

export const WidgetContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  flex: 1,
  justifyContent: 'space-between',
  flexDirection: 'column',
  height: '100%',
}))

export const WidgetTitleContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))

export const WidgetTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  color: theme.palette.text.primary,
}))
