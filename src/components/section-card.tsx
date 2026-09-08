import type { ReactNode } from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
export function SectionCard({
  title,
  description,
  action,
  children,
  sx,
  noPadding = false,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  sx?: SxProps<Theme>;
  noPadding?: boolean;
}) {
  return (
    <Card sx={sx}>
      {title && (
        <Stack
          direction='row'
          sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2, px: 2.5, pt: 2.5, pb: 2 }}
        >
          <Box>
            <Typography variant='h4'>{title}</Typography>
            {description && (
              <Typography variant='body2' sx={{ color: 'text.secondary', mt: 0.4 }}>
                {description}
              </Typography>
            )}
          </Box>
          {action}
        </Stack>
      )}
      <Box sx={{ p: noPadding ? 0 : 2.5, pt: noPadding ? 0 : title ? 0.5 : 2.5 }}>{children}</Box>
    </Card>
  );
}
