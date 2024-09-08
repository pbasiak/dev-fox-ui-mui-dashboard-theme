import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { routes } from '../../contants/routes';
import logo from '../../assets/logo.png';
import { styled } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

const LogoText = styled(Typography, { name: 'FoxUiLogo', slot: 'text' })<PropsWithChildren<TypographyProps>>(
  ({ theme }) => ({
    ...theme.typography.h4,
    fontSize: '1.5rem',
    fontWeight: theme.typography.fontWeightBold,
  }),
);

const LogoImgContainer = styled(Box, {
  name: 'FoxUiLogo',
  slot: 'imgContainer',
  shouldForwardProp: (prop) => prop !== 'invertImage',
})<{ invertImage?: boolean }>(({ invertImage }) => ({
  filter: `invert(${invertImage ? '1' : '0'})`,
}));

const LogoImg = styled(Box, { name: 'FoxUiLogo', slot: 'img' })<BoxProps<'img'>>(({ theme }) => ({
  maxWidth: '40px',
  marginRight: theme.spacing(2),
  filter: `invert(${theme.palette.mode === 'light' ? '0' : '1'})`,
}));

interface Params {
  invertImage?: boolean;
}

export const Logo = ({ invertImage }: Params) => {
  const navigate = useNavigate();

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
      <LogoImgContainer invertImage={invertImage}>
        <LogoImg component={'img'} src={logo} alt={''} />
      </LogoImgContainer>
      <LogoText component={'h1'}>DevFoxUI</LogoText>
    </Box>
  );
};
