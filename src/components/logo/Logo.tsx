import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { routes } from '../../contants/routes';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', cursor: 'pointer', '&:hover': { opacity: 0.8 } }} onClick={() => navigate(routes.dashboard)} component={'a'}>
      <Typography variant={'h5'} component={'h1'} fontWeight={'fontWeightBold'}>DevZone</Typography>
    </Box>
  )
}