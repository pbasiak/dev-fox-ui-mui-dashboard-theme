import { Box, styled } from '@mui/material';
import WelcomeImage from '../../../../assets/images/pexels-yan-krukau-4458423.jpg';

export const WelcomeWidgetContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  backgroundImage: `url(${WelcomeImage})`,
  backgroundSize: 'cover',
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  color: theme.palette.primary.contrastText,
  minHeight: '150px',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.85,
    zIndex: 1,
    backgroundColor: theme.palette.primary.main,
  }
}));

export const WelcomeWidgetContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  zIndex: 2,
}));