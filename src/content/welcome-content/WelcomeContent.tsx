import { Stack, Typography } from '@mui/material';
import { Logo } from '../../components/logo/Logo.tsx';

export const WelcomeContent = () => {
  return (
    <Stack spacing={2} sx={{ minWidth: '60%' }} alignItems={'center'}>
      <Logo invertImage />
      <Typography variant={'h3'} component={'h1'}>
        Welcome to DevZone
      </Typography>
      <Typography variant={'body1'}>Find your dream theme today</Typography>
      <Stack>
        <Typography variant={'h4'} textAlign={'center'}>
          Easily customizable...
        </Typography>
        <Typography variant={'body1'} textAlign={'center'}>
          ... with multiple features
        </Typography>
      </Stack>
    </Stack>
  );
};
