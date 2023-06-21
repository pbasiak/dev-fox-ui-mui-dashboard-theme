import { Box, styled, Typography } from '@mui/material';
import widgetBackgroundSvg from '../../assets/backgrounds/widget-bg.svg'

export const WidgetContainer = styled(Box)(({ theme }) => ({
  border: `1px solid #F0F0F0`,
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
  flex: 1,
  backgroundImage: `url(${widgetBackgroundSvg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '105% 105%',
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
