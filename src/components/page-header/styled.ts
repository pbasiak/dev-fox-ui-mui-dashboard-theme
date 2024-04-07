import { styled, Typography } from '@mui/material';

export const PageHeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize * 2.5,
  fontWeight: theme.typography.fontWeightBold,
}));
