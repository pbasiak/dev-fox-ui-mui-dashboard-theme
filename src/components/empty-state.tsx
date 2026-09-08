import { Box, Typography } from '@mui/material';
import SearchOffRounded from '@mui/icons-material/SearchOffRounded';
import type { ReactNode } from 'react';
export function EmptyState({
  title = 'No results found',
  description = 'Try a different search or clear your filters.',
  action,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <Box sx={{ textAlign: 'center', py: 7, px: 2 }}>
      <SearchOffRounded sx={{ fontSize: 38, color: 'text.disabled', mb: 1.5 }} />
      <Typography variant='h4'>{title}</Typography>
      <Typography sx={{ color: 'text.secondary', mt: 1, mb: 2 }}>{description}</Typography>
      {action}
    </Box>
  );
}
