import { useState } from 'react';
import { Link } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  LinearProgress,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import FileDownloadOutlined from '@mui/icons-material/FileDownloadOutlined';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import AdsClickRounded from '@mui/icons-material/AdsClickRounded';
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined';
import { PageHeader } from '../../components/page-header';
import { MetricCard } from '../../components/metric-card';
import { SectionCard } from '../../components/section-card';
import { RevenueChart } from './revenue-chart';
import { analytics } from './data';
import type { Period } from './data';
import { initialOrders, OrderDetail, OrdersTable } from '../orders';
import type { Order } from '../orders';
import { initialProjects } from '../projects';
import { currency, number, downloadCsv } from '../../lib/format';
import { useLocalStorage } from '../../hooks/use-local-storage';

export default function DashboardPage() {
  const [period, setPeriod] = useState<Period>('month');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [orders] = useLocalStorage('devfox:orders', initialOrders);
  const [profile] = useLocalStorage('devfox:profile', { name: 'Alex Morgan' });
  const [projects] = useLocalStorage('devfox:projects', initialProjects);
  const theme = useTheme();
  const data = analytics[period];
  const channels = [
    { label: 'Direct', value: 42, color: theme.palette.primary.main },
    { label: 'Organic search', value: 28, color: theme.palette.secondary.main },
    { label: 'Referrals', value: 18, color: theme.palette.info.main },
    { label: 'Social media', value: 12, color: theme.palette.mode === 'light' ? '#d8dbdf' : '#626572' },
  ];
  const exportReport = () =>
    downloadCsv(`devfox-${period}-report.csv`, [
      ['Period', 'Revenue', 'Orders', 'New customers', 'Conversion'],
      [period, data.revenue, data.orders, data.customers, data.conversion],
      [],
      ['Interval', 'Revenue', 'Previous revenue'],
      ...data.chart.map((row) => [row.label, row.current, row.previous]),
    ]);
  return (
    <>
      <PageHeader
        title='A little progress. A bigger picture.'
        description={`Welcome back, ${profile.name.split(' ')[0]}. Here’s what’s happening in your workspace.`}
        eyebrow='Your workspace, at a glance'
        action={
          <>
            <TextField
              select
              value={period}
              onChange={(event) => setPeriod(event.target.value as Period)}
              slotProps={{
                select: { 'aria-label': 'Reporting period' },
                input: {
                  startAdornment: <CalendarTodayOutlined sx={{ fontSize: 15, mr: 1, color: 'text.secondary' }} />,
                },
              }}
              sx={{ minWidth: 154, bgcolor: 'background.paper' }}
            >
              <MenuItem value='week'>This week</MenuItem>
              <MenuItem value='month'>This month</MenuItem>
              <MenuItem value='year'>This year</MenuItem>
            </TextField>
            <Button
              variant='contained'
              startIcon={<FileDownloadOutlined sx={{ fontSize: 17 }} />}
              onClick={exportReport}
            >
              Export report
            </Button>
          </>
        }
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: 2,
          mb: 3,
        }}
      >
        <MetricCard
          label='Total revenue'
          value={currency(data.revenue).replace('.00', '')}
          change={data.change}
          icon={<AccountBalanceWalletOutlined />}
        />
        <MetricCard label='Total orders' value={number(data.orders)} change='8.2%' icon={<ShoppingBagOutlined />} />
        <MetricCard label='New customers' value={number(data.customers)} change='6.4%' icon={<PeopleAltOutlined />} />
        <MetricCard label='Conversion rate' value={data.conversion} change='2.1%' icon={<AdsClickRounded />} />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.9fr) minmax(280px, 1fr)' },
          gap: 2.5,
          mb: 2.5,
        }}
      >
        <SectionCard
          title='Revenue overview'
          description='A closer look at how your business is growing.'
          action={<Chip label='Sample analytics' variant='outlined' sx={{ color: 'text.secondary', fontSize: 9 }} />}
        >
          <Stack direction='row' sx={{ alignItems: 'center', gap: 1.5, mb: 0.5 }}>
            <Typography sx={{ fontSize: 28, letterSpacing: '-.8px', fontWeight: 650 }}>
              {currency(data.revenue).replace('.00', '')}
            </Typography>
            <Chip
              label={`↗ ${data.change}`}
              sx={{ color: 'success.main', bgcolor: (theme) => alpha(theme.palette.success.main, 0.08) }}
            />
          </Stack>
          <RevenueChart period={period} />
        </SectionCard>
        <SectionCard title='Where people find you' description='Traffic by acquisition channel'>
          <Box
            sx={{ position: 'relative', width: 186, height: 186, mx: 'auto', mt: 1.5, mb: 2.5 }}
            role='img'
            aria-label='Traffic sources: Direct 42%, organic search 28%, referrals 18%, social media 12%'
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: `conic-gradient(${channels[0].color} 0% 41%, ${theme.palette.background.paper} 41% 42%, ${channels[1].color} 42% 69%, ${theme.palette.background.paper} 69% 70%, ${channels[2].color} 70% 87%, ${theme.palette.background.paper} 87% 88%, ${channels[3].color} 88% 99%, ${theme.palette.background.paper} 99% 100%)`,
                transform: 'rotate(-90deg)',
              }}
            />
            <Stack
              sx={{
                position: 'absolute',
                inset: 22,
                bgcolor: 'background.paper',
                borderRadius: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                Total visitors
              </Typography>
              <Typography sx={{ fontSize: 28, fontWeight: 650, letterSpacing: '-1px' }}>
                {number(Math.round(data.customers * 35.3))}
              </Typography>
              <Typography variant='caption' sx={{ color: 'success.main' }}>
                ↗ 14.6%
              </Typography>
            </Stack>
          </Box>
          <Stack sx={{ gap: 1.2 }}>
            {channels.map((channel) => (
              <Stack direction='row' key={channel.label} sx={{ alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: channel.color }} />
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  {channel.label}
                </Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, ml: 'auto' }}>
                  {channel.value}%
                </Typography>
              </Stack>
            ))}
          </Stack>
        </SectionCard>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.9fr) minmax(280px, 1fr)' },
          gap: 2.5,
          mb: 2.5,
        }}
      >
        <SectionCard
          title='Recent orders'
          description='The latest activity from your customers.'
          noPadding
          action={
            <Button
              component={Link}
              to='/orders'
              size='small'
              color='inherit'
              endIcon={<ArrowForwardRounded sx={{ fontSize: 15 }} />}
            >
              View all
            </Button>
          }
        >
          <OrdersTable orders={orders.slice(0, 5)} compact onOpen={setSelectedOrder} />
          <Box sx={{ px: 2.5, py: 1.6 }}>
            <Typography variant='caption' sx={{ color: 'text.secondary' }}>
              Showing {Math.min(orders.length, 5)} of {orders.length} orders
            </Typography>
          </Box>
        </SectionCard>
        <SectionCard
          title='Projects in motion'
          description='Good things are taking shape.'
          action={
            <Button component={Link} to='/projects' aria-label='View all projects' size='small' sx={{ minWidth: 28 }}>
              <ArrowOutwardRounded fontSize='small' />
            </Button>
          }
        >
          <Stack sx={{ gap: 2.7, mt: 1 }}>
            {projects
              .filter((project) => project.status !== 'Completed')
              .slice(0, 3)
              .map((project) => (
                <Box key={project.id}>
                  <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography component={Link} to='/projects' variant='subtitle2' sx={{ textDecoration: 'none' }}>
                      {project.name}
                    </Typography>
                    <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                      {project.progress}%
                    </Typography>
                  </Stack>
                  <LinearProgress
                    aria-label={`${project.name} progress`}
                    variant='determinate'
                    value={project.progress}
                    sx={{ my: 1.4, '& .MuiLinearProgress-bar': { bgcolor: project.color } }}
                  />
                  <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                      {project.category}
                    </Typography>
                    <AvatarGroup
                      max={3}
                      sx={{ '& .MuiAvatar-root': { width: 21, height: 21, fontSize: 8, borderWidth: 2 } }}
                    >
                      {project.members.map((member) => (
                        <Avatar key={member}>{member}</Avatar>
                      ))}
                    </AvatarGroup>
                  </Stack>
                </Box>
              ))}
          </Stack>
        </SectionCard>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
          border: '1px solid',
          borderColor: (theme) => alpha(theme.palette.primary.main, 0.18),
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.035),
          p: 2.5,
          borderRadius: '12px',
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '8px',
            display: 'grid',
            placeItems: 'center',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.09),
            color: 'primary.main',
          }}
        >
          <AutoAwesomeOutlined fontSize='small' />
        </Box>
        <Box sx={{ flex: 1, minWidth: 180 }}>
          <Typography variant='subtitle2'>Your next great idea starts here.</Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            Explore a collection of thoughtful components, ready to make your own.
          </Typography>
        </Box>
        <Button component={Link} to='/components' variant='outlined' endIcon={<ArrowForwardRounded fontSize='small' />}>
          Explore components
        </Button>
      </Box>
      <OrderDetail order={selectedOrder} onClose={() => setSelectedOrder(null)} />
    </>
  );
}
