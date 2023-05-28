import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FieldErrorText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize,
  color: theme.palette.error.main,
}))