import { Logo } from '../../components/logo/Logo';
import { Box, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import appScreenshot from '../../assets/images/app-screenshot.png';

export const WelcomeContent = () => {
  const images = [
    { id: 1, src: appScreenshot },
    { id: 2, src: appScreenshot },
    { id: 3, src: appScreenshot },
    { id: 4, src: appScreenshot },
  ];

  return (
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
  )
}