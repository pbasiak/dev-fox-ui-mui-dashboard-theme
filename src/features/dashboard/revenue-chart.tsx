import { Box, Stack, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { Period } from './data';
import { analytics } from './data';
import { currency } from '../../lib/format';
import { useId } from 'react';
export function RevenueChart({ period }: { period: Period }) {
  const theme = useTheme();
  const id = useId();
  return (
    <Box>
      <Stack direction='row' sx={{ gap: 2.5, justifyContent: 'flex-end', mb: 1 }}>
        {[
          { label: 'This period', color: theme.palette.primary.main },
          { label: 'Previous period', color: theme.palette.text.disabled },
        ].map((item) => (
          <Stack key={item.label} direction='row' sx={{ gap: 0.8, alignItems: 'center' }}>
            <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: item.color }} />
            <Typography variant='caption' sx={{ color: 'text.secondary' }}>
              {item.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Box
        sx={{ height: 265, width: '100%', minWidth: 0 }}
        role='img'
        aria-label={`Revenue comparison for this ${period}. Current total ${currency(analytics[period].revenue)}.`}
      >
        <ResponsiveContainer width='100%' height='100%' minWidth={0}>
          <AreaChart data={analytics[period].chart} margin={{ top: 15, right: 8, bottom: 0, left: -19 }}>
            <defs>
              <linearGradient id={id} x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor={theme.palette.primary.main} stopOpacity={0.16} />
                <stop offset='100%' stopColor={theme.palette.primary.main} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={theme.palette.divider} strokeDasharray='4 4' />
            <XAxis
              dataKey='label'
              axisLine={false}
              tickLine={false}
              minTickGap={30}
              tick={{ fill: theme.palette.text.secondary, fontSize: 10 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme.palette.text.secondary, fontSize: 10 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                background: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(value) => currency(Number(value))}
            />
            <Area
              name='Previous period'
              type='monotone'
              dataKey='previous'
              stroke={alpha(theme.palette.text.secondary, 0.4)}
              strokeDasharray='5 5'
              strokeWidth={2}
              fill='transparent'
              isAnimationActive={false}
            />
            <Area
              name='This period'
              type='monotone'
              dataKey='current'
              stroke={theme.palette.primary.main}
              strokeWidth={2.5}
              fill={`url(#${id})`}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
