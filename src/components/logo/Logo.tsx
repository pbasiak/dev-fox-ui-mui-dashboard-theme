import { Box, Typography } from '@mui/material';

import logoSvg from '../../assets/logo.svg?url';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../contants/routes';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', cursor: 'pointer', '&:hover': { opacity: 0.8 } }} onClick={() => navigate(routes.dashboard)} component={'a'}>
      <img src={logoSvg} width={50} alt={''} />
      <Typography fontWeight={'fontWeightBold'} variant="h6" sx={{ px: 1, py: 0.5 }}>DevZone</Typography>
    </Box>
  )
}