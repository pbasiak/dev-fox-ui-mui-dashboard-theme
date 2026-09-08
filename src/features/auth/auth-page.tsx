import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';
import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded';
import { Logo } from '../../components/logo';
export default function AuthPage() {
  const location = useLocation();
  const register = location.pathname === '/register';
  const reset = location.pathname === '/reset-password';
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100dvh', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
      <Stack
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          p: { xs: 3, md: 6 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: { md: '100dvh' },
        }}
      >
        <Logo light />
        <Box sx={{ my: 'auto', py: { xs: 5, md: 12 }, position: 'relative', zIndex: 1, maxWidth: 470 }}>
          <Typography variant='overline' sx={{ opacity: 1 }}>
            A little more possible
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 35, md: 54 }, fontWeight: 600, lineHeight: 1.15, letterSpacing: '-2px', mt: 2 }}
          >
            Good work starts
            <br />
            with a little space.
          </Typography>
          <Typography sx={{ mt: 3, maxWidth: 340, opacity: 1, lineHeight: 1.8 }}>
            A thoughtful workspace for your people, projects, and next big idea. Make yourself at home.
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, mt: 5 }}>
            {['Thoughtfully designed', 'Yours to build on'].map((label) => (
              <Box
                key={label}
                sx={{
                  px: 1.5,
                  py: 0.7,
                  border: '1px solid',
                  borderColor: 'currentColor',
                  borderRadius: 6,
                  opacity: 1,
                  fontSize: 11,
                }}
              >
                ✓ {label}
              </Box>
            ))}
          </Box>
        </Box>
        <Typography variant='caption' sx={{ opacity: 1, display: { xs: 'none', md: 'block' } }}>
          Made with a little care. Built for a lot of possibility.
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            width: 450,
            height: 450,
            border: '1px solid',
            borderColor: 'currentColor',
            opacity: 0.1,
            borderRadius: '50%',
            right: -230,
            top: '35%',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 40,
              border: '1px solid',
              borderColor: 'currentColor',
              borderRadius: '50%',
            },
          }}
        />
      </Stack>
      <Stack sx={{ justifyContent: 'center', alignItems: 'center', p: { xs: 3, md: 6 }, bgcolor: 'background.paper' }}>
        <Box sx={{ width: '100%', maxWidth: 380 }}>
          <Button component={Link} to='/' startIcon={<ArrowBackRounded />} sx={{ mb: 4, p: 0 }}>
            Back to workspace
          </Button>
          <Typography variant='h1'>
            {reset ? 'A fresh start' : register ? 'Make room for your next idea.' : 'Welcome back.'}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mt: 1, mb: 3 }}>
            {reset
              ? 'Enter your email to preview the reset flow.'
              : register
                ? 'Create your demo account and make yourself at home.'
                : 'A little focus. A little progress. Let’s get to it.'}
          </Typography>
          <Alert severity='info' sx={{ mb: 3 }}>
            Template preview. No account is created and no credentials are stored or sent.
          </Alert>
          {submitted && reset ? (
            <Alert severity='success'>
              Reset flow preview complete. In your app, this is where you would send a secure reset link.
            </Alert>
          ) : (
            <Stack
              component='form'

              onSubmit={(event) => {
                event.preventDefault();
                if (reset) setSubmitted(true);
                else navigate('/');
              }}
              sx={{ gap: 2.5 }}
            >
              {register && <TextField required label='Full name' autoComplete='name' />}
              <TextField required type='email' label='Email address' autoComplete='email' />
              {!reset && (
                <TextField
                  required
                  label='Password'
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={register ? 'new-password' : 'current-password'}
                  slotProps={{
                    htmlInput: { minLength: 8 },
                    input: {
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            onClick={() => setShowPassword((value) => !value)}
                            edge='end'
                          >
                            {showPassword ? (
                              <VisibilityOffOutlined fontSize='small' />
                            ) : (
                              <VisibilityOutlined fontSize='small' />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  helperText='Use at least 8 characters for this demo.'
                />
              )}
              {register && (
                <FormControlLabel
                  control={<Checkbox required />}
                  label={<Typography variant='body2'>I understand this is a demo workspace.</Typography>}
                />
              )}
              {!reset && !register && (
                <Box sx={{ textAlign: 'right' }}>
                  <Typography
                    component={Link}
                    to='/reset-password'

                    variant='body2'
                    sx={{ color: 'primary', textDecoration: 'none' }}
                  >
                    Forgot password?
                  </Typography>
                </Box>
              )}
              <Button variant='contained' type='submit' size='large'>
                {reset ? 'Preview password reset' : register ? 'Explore your workspace' : 'Sign in to demo'}
              </Button>
            </Stack>
          )}
          <Typography variant='body2' sx={{ textAlign: 'center', color: 'text.secondary', mt: 4 }}>
            {register ? 'Already have an account?' : 'New around here?'}{' '}
            <Box
              component={Link}
              to={register ? '/login' : '/register'}
              sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none' }}
            >
              {register ? 'Sign in' : 'Get started'}
            </Box>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
