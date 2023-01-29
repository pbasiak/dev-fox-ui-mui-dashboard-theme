import { Box, styled } from '@mui/material';

export const PageNotFoundContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translateY(-50%) translateX(-25%)',
}))