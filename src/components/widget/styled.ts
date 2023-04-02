import { Box, styled, Typography } from '@mui/material';

export const WidgetContainer = styled(Box)(({ theme }) => ({
  border: `1px solid #F0F0F0`,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 3px 12px 0 rgba(0, 0, 0, 0.05)',
  flex: 1
}))

export const WidgetTitleContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

export const WidgetTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: '14px',
  color: theme.palette.text.secondary,
}))
