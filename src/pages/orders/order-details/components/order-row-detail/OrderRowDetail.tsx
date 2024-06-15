import { Stack, Typography } from '@mui/material';

interface OrderRowDetailProps {
  label: string;
  value: string | number;
}

export const OrderRowDetail = ({ label, value }: OrderRowDetailProps) => {
  return (
    <Stack>
      <Typography variant='caption' color='textSecondary'>
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
};
