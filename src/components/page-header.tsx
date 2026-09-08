import type { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';

export interface PageHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  action?: ReactNode;
}
export function PageHeader({ title, description, eyebrow, action }: PageHeaderProps) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}

      sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 2, mb: 3.5 }}
    >
      <Box>
        {eyebrow && (
          <Typography variant='overline' sx={{ color: 'primary', display: 'block', mb: 0.5 }}>
            {eyebrow}
          </Typography>
        )}
        <Typography variant='h1'>{title}</Typography>
        {description && <Typography sx={{ color: 'text.secondary', mt: 0.8 }}>{description}</Typography>}
      </Box>
      {action && (
        <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap' }}>
          {action}
        </Stack>
      )}
    </Stack>
  );
}
