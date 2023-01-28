import { styled, Typography } from '@mui/material';

export const DrawerLogoText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  marginLeft: theme.spacing(1),
}))