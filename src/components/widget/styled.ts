import { Box, styled, Typography } from '@mui/material';
import waveSvg from '../../assets/wave2.svg'

export const WidgetContainer = styled(Box)(({ theme }) => ({
  border: `1px solid #F0F0F0`,
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
  flex: 1,
  backgroundImage: `url(${waveSvg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0% 200%',
  backgroundSize: '100%',
  justifyContent: 'space-between',
  flexDirection: 'column',
  // display: 'flex',
}))

export const WidgetTitleContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

export const WidgetTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.subtitle1.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  color: theme.palette.text.secondary,
}))
