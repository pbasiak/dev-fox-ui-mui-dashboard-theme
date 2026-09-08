import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from '../components/logo';
export function ErrorPage({ crash = false }: { crash?: boolean }) {
  return (
    <Stack sx={{ minHeight: '100dvh', alignItems: 'center', justifyContent: 'center', textAlign: 'center', p: 3 }}>
      <Logo />
      <Typography
        sx={{ fontSize: 120, fontWeight: 700, letterSpacing: '-10px', color: 'primary.main', lineHeight: 1.3, mt: 4 }}
      >
        {crash ? 'Oops.' : '404'}
      </Typography>
      <Typography variant='h1'>{crash ? 'A small interruption.' : 'A little off the beaten path.'}</Typography>
      <Typography sx={{ color: 'text.secondary', mt: 2, maxWidth: 400 }}>
        {crash
          ? 'Something prevented this page from loading. Refresh the page to try again.'
          : 'This page has moved, or it never quite made it here. Let’s get you back to your workspace.'}
      </Typography>
      <Box sx={{ mt: 4 }}>
        {crash ? (
          <Button variant='contained' onClick={() => window.location.reload()}>
            Try again
          </Button>
        ) : (
          <Button component={Link} to='/' variant='contained'>
            Back to workspace
          </Button>
        )}
      </Box>
    </Stack>
  );
}
