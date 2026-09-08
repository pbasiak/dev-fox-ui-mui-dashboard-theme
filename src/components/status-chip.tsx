import { Box, Chip } from '@mui/material';
import { alpha } from '@mui/material/styles';
const statusColors = {
  Paid: 'success',
  Active: 'success',
  Completed: 'success',
  Published: 'success',
  Pending: 'warning',
  'In progress': 'info',
  Draft: 'warning',
  Refunded: 'secondary',
  Inactive: 'secondary',
  Cancelled: 'error',
  'To do': 'secondary',
  Review: 'warning',
} as const;
export function StatusChip({ status }: { status: string }) {
  const color = statusColors[status as keyof typeof statusColors] ?? 'secondary';
  return (
    <Chip
      label={status}
      icon={
        <Box
          component='span'
          sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: `${color}.main`, ml: '8px !important' }}
        />
      }
      sx={(theme) => ({ color: theme.palette[color].main, bgcolor: alpha(theme.palette[color].main, 0.09) })}
    />
  );
}
