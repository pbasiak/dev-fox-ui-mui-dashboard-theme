import { Box, Card, Stack, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import TrendingUpRounded from '@mui/icons-material/TrendingUpRounded';
import type { ReactNode } from 'react';
export function MetricCard({
  label,
  value,
  change,
  icon,
  points = [20, 17, 22, 16, 24, 19, 26, 21, 32, 27, 35],
}: {
  label: string;
  value: string;
  change: string;
  icon: ReactNode;
  points?: number[];
}) {
  const theme = useTheme();
  return (
    <Card sx={{ p: 2.5, position: 'relative', overflow: 'hidden' }}>
      <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            placeItems: 'center',
            width: 30,
            height: 30,
            color: 'text.secondary',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '8px',
            '& svg': { fontSize: 17 },
          }}
        >
          {icon}
        </Box>
      </Stack>
      <Typography sx={{ fontSize: { xs: 25, lg: 29 }, fontWeight: 650, letterSpacing: '-1px', mt: 1.4 }}>
        {value}
      </Typography>
      <Stack direction='row' sx={{ gap: 0.6, alignItems: 'center', mt: 1.4 }}>
        <TrendingUpRounded sx={{ color: 'success.main', fontSize: 14 }} />
        <Typography variant='caption' sx={{ color: 'success.main', fontWeight: 600 }}>
          {change}
        </Typography>
        <Typography variant='caption' sx={{ color: 'text.secondary' }}>
          vs. previous period
        </Typography>
      </Stack>
      <Box
        sx={{
          position: 'absolute',
          right: 18,
          top: 72,
          width: 78,
          height: 35,
          opacity: 0.7,
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <svg width='100%' height='100%' viewBox='0 0 100 45' aria-hidden='true'>
          <path
            d={`M0 45 ${points.map((p, i) => `L${i * 10} ${45 - p}`).join(' ')} L100 45Z`}
            fill={alpha(theme.palette.success.main, 0.09)}
          />
          <polyline
            points={points.map((p, i) => `${i * 10},${45 - p}`).join(' ')}
            fill='none'
            stroke={theme.palette.success.main}
            strokeWidth='2'
          />
        </svg>
      </Box>
    </Card>
  );
}
