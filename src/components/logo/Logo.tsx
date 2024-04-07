import { Box, Typography, useTheme } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { routes } from '../../contants/routes';
import logo from '../../assets/logo.png';

interface Params {
  invertImage?: boolean;
}

export const Logo = ({ invertImage }: Params) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        cursor: 'pointer',
        '&:hover': { opacity: 0.8 },
      }}
      onClick={() => navigate(routes.dashboard)}
      component={'a'}
    >
      <Box sx={{ filter: `invert(${invertImage ? '1' : '0'})` }}>
        <Box
          component={'img'}
          src={logo}
          alt={''}
          sx={{ maxWidth: '40px', mr: 2, filter: `invert(${theme.palette.mode === 'light' ? '0' : '1'})` }}
        />
      </Box>
      <Typography variant={'h4'} component={'h1'} fontSize={'1.5rem'} fontWeight={'fontWeightBold'}>
        DevFoxUI
      </Typography>
    </Box>
  );
};
