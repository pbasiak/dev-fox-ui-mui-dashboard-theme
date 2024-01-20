import { Box } from '@mui/material';

import logoSvg from '../../assets/devdash-logo.svg?url';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../contants/routes';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', cursor: 'pointer', '&:hover': { opacity: 0.8 } }} onClick={() => navigate(routes.dashboard)} component={'a'}>
      <img src={logoSvg} width={150} alt={''} />
    </Box>
  )
}