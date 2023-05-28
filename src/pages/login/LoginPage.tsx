import { FullWidthLayout } from '../../layouts/full-width-layout/FullWidthLayout';
import {
  Box,
  Button,
  FormControl,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';
import { Logo } from '../../components/logo/Logo';
import appScreenshot from '../../assets/images/app-screenshot.png';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../contants/routes';
import CirclesSvg from '../../assets/backgrounds/circles.svg';

export const LoginPage = () => {
  const navigate = useNavigate();

  const images = [
    { id: 1, src: appScreenshot },
    { id: 2, src: appScreenshot },
    { id: 3, src: appScreenshot },
    { id: 4, src: appScreenshot },
  ];

  return (
    <FullWidthLayout hideLogo>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={12} md={6} padding={2} sx={{ backgroundColor: 'primary.dark', backgroundImage: `url(${CirclesSvg})`, backgroundSize: 'cover', color: 'primary.contrastText', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Stack spacing={2} sx={{ minWidth: '60%' }} alignItems={'center'}>
            <Logo />
            <Typography variant={'h3'} component={'h1'}>Welcome to DevZone</Typography>
            <Typography variant={'body1'}>Find your dream theme today</Typography>
            <Box sx={{ maxWidth: '60%' }}>
              <ImageList cols={2} rowHeight={'auto'}>
                {images.map((image) => (
                  <ImageListItem key={image.id} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <img
                      src={`${image.src}?w=248&fit=crop&auto=format`}
                      srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={image.id + ''}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            <Stack>
              <Typography variant={'h4'} textAlign={'center'}>Easily customizable...</Typography>
              <Typography variant={'body1'} textAlign={'center'}>... with multiple features</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} padding={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Stack spacing={2} sx={{ minWidth: '60%' }} alignItems={'center'}>
            <Typography variant={'h3'} component={'h1'}>Hello again,</Typography>
            <Typography variant={'body1'}>Enter your credentials below</Typography>
            <FormControl fullWidth>
              <TextField fullWidth placeholder={'Email'}/>
            </FormControl>
            <FormControl fullWidth>
              <TextField fullWidth placeholder={'Password'} type={'password'}/>
            </FormControl>

            <Button variant={'contained'} fullWidth onClick={() => navigate(routes.dashboard)}>Login</Button>
            <Typography variant={'body2'}>Or login with</Typography>
            <Stack direction={'row'} spacing={1}>
              <Button variant={'outlined'} startIcon={<Google />}>Google</Button>
              <Button variant={'outlined'} startIcon={<Facebook />}>Facebook</Button>
            </Stack>
            <Stack spacing={1}>
              <Typography textAlign={'center'} variant={'body2'} sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>Don't have an account? <Link onClick={() => navigate(routes.register)} underline={'hover'} component={'button'}>Sign up</Link></Typography>
              <Typography textAlign={'center'} variant={'body2'} sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>Forgot password? <Link onClick={() => navigate(routes.resetPassword)} component={'button'} underline={'hover'}>Reset password</Link></Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </FullWidthLayout>
  )
}