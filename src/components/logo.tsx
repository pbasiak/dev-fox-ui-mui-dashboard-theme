import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Stack
      component={Link}
      to='/'
      direction='row'

      sx={{
        alignItems: 'center',
        gap: 1,
        ...{ textDecoration: 'none', color: light ? 'primary.contrastText' : 'text.primary' },
      }}
      aria-label='DevFox home'
    >
      <Box
        sx={{
          width: 33,
          height: 33,
          bgcolor: 'primary.main',
          borderRadius: '9px',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <svg width='24' height='24' viewBox='0 0 32 32' fill='none' aria-hidden='true'>
          <path d='M5 5L15.8 10L27 5L25.5 21L16 28L6.5 21Z' fill='white' />
          <path d='M5 5L10 16L16 21L22 16L27 5L24 21L16 27L8 21Z' fill='#ffc69f' />
          <path d='M10 17L13 18M22 17L19 18' stroke='#a74312' strokeWidth='2' strokeLinecap='round' />
          <path d='M13 22H19L16 25Z' fill='#a74312' />
        </svg>
      </Box>
      <Typography sx={{ fontSize: 21, fontWeight: 750, letterSpacing: '-.9px' }}>
        devfox<span style={{ color: '#e87532' }}>.</span>
      </Typography>
      <Typography
        variant='overline'
        sx={{ alignSelf: 'end', mb: 0.4, color: light ? 'primary.contrastText' : 'text.secondary', fontSize: 8 }}
      >
        workspace
      </Typography>
    </Stack>
  );
}
