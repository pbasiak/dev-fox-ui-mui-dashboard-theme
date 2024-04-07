import { Button, Divider, FormControl, Link, Stack, TextField, Typography } from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../contants/routes';
import { WelcomeContent } from '../../content/welcome-content/WelcomeContent';
import { HalfLayout } from '../../layouts/half-layout/HalfLayout';

export const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <HalfLayout>
      <WelcomeContent />
      <Stack spacing={2} sx={{ minWidth: '60%' }} alignItems={'center'}>
        <Typography variant={'h3'} component={'h1'}>
          Create account
        </Typography>
        <Typography variant={'body1'}>Fill the form below to register new account</Typography>
        <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
          <FormControl fullWidth>
            <TextField label={'First name'} fullWidth placeholder={'First name'} />
          </FormControl>
          <FormControl fullWidth>
            <TextField label={'Last name'} fullWidth placeholder={'Last name'} />
          </FormControl>
        </Stack>
        <FormControl fullWidth>
          <TextField label={'Username'} fullWidth placeholder={'Username'} />
        </FormControl>
        <FormControl fullWidth>
          <TextField label={'Email'} fullWidth placeholder={'Email'} />
        </FormControl>
        <FormControl fullWidth>
          <TextField label={'Password'} fullWidth placeholder={'Password'} type={'password'} />
        </FormControl>
        <FormControl fullWidth>
          <TextField label={'Confirm password'} fullWidth placeholder={'Password'} type={'password'} />
        </FormControl>

        <Button variant={'contained'} fullWidth onClick={() => navigate(routes.dashboard)}>
          Create account
        </Button>
        <Divider sx={{ width: '100%' }} />
        <Typography variant={'body2'}>Or register with</Typography>
        <Stack direction={'row'} spacing={1}>
          <Button variant={'outlined'} startIcon={<Google />}>
            Google
          </Button>
          <Button variant={'outlined'} startIcon={<Facebook />}>
            Facebook
          </Button>
        </Stack>
        <Stack spacing={1}>
          <Typography textAlign={'center'} variant={'body2'} sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            Already have an account?{' '}
            <Link onClick={() => navigate(routes.login)} underline={'hover'} component={'button'}>
              Sign in
            </Link>
          </Typography>
          <Typography textAlign={'center'} variant={'body2'} sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            Forgot password?{' '}
            <Link onClick={() => navigate(routes.resetPassword)} component={'button'} underline={'hover'}>
              Reset password
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </HalfLayout>
  );
};
