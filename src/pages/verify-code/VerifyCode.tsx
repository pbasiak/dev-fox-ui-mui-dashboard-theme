import { Button, Divider, FormControl, Link, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../contants/routes';
import { HalfLayout } from '../../layouts/half-layout/HalfLayout';
import { WelcomeContent } from '../../content/welcome-content/WelcomeContent';

export const VerifyCode = () => {
  const navigate = useNavigate();

  return (
    <HalfLayout>
      <WelcomeContent />
      <Stack spacing={2} sx={{ minWidth: '60%' }} alignItems={'center'}>
        <Typography variant={'h3'} component={'h1'}>
          Verify code
        </Typography>
        <Typography variant={'body1'}>Enter the code from the email we sent.</Typography>
        <FormControl fullWidth>
          <TextField fullWidth placeholder={'Code'} />
        </FormControl>
        <Button variant={'contained'} fullWidth onClick={() => navigate(routes.dashboard)}>
          Verify code
        </Button>
        <Divider sx={{ width: '100%' }} />
        <Stack spacing={1}>
          <Typography textAlign={'center'} variant={'body2'} sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            Don't have an account?{' '}
            <Link onClick={() => navigate(routes.register)} underline={'hover'} component={'button'}>
              Sign up
            </Link>
          </Typography>
          <Typography textAlign={'center'} variant={'body2'} sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            Already have an account?{' '}
            <Link onClick={() => navigate(routes.login)} component={'button'} underline={'hover'}>
              Log in
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </HalfLayout>
  );
};
