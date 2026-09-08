import { lazy, Suspense } from 'react';
import type { ReactNode } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Box, Skeleton, Stack } from '@mui/material';
import { AppLayout } from './app-layout';
import { ErrorPage } from './error-page';
const Dashboard = lazy(() => import('../features/dashboard/dashboard-page'));
const Customers = lazy(() => import('../features/customers/customers-page'));
const Orders = lazy(() => import('../features/orders/orders-page'));
const Projects = lazy(() => import('../features/projects/projects-page'));
const Tasks = lazy(() => import('../features/tasks/tasks-page'));
const Calendar = lazy(() => import('../features/calendar/calendar-page'));
const Articles = lazy(() => import('../features/articles/articles-page'));
const Settings = lazy(() => import('../features/settings/settings-page'));
const Components = lazy(() => import('../features/components/components-page'));
const Auth = lazy(() => import('../features/auth/auth-page'));
function PageLoading() {
  return (
    <Stack aria-label='Loading page' role='status' sx={{ gap: 3 }}>
      <Skeleton width='40%' height={55} />
      <Skeleton width='60%' />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
        <Skeleton variant='rounded' height={170} />
        <Skeleton variant='rounded' height={170} />
      </Box>
      <Skeleton variant='rounded' height={300} />
    </Stack>
  );
}
const page = (node: ReactNode) => <Suspense fallback={<PageLoading />}>{node}</Suspense>;
const aliases: Record<string, string> = {
  '/user/list': '/customers',
  '/user/create': '/customers',
  '/user/edit': '/customers',
  '/user/account': '/settings',
  '/user/profile': '/settings',
  '/order/list': '/orders',
  '/order/details': '/orders',
  '/jobs/list': '/projects',
  '/jobs/create': '/projects',
  '/jobs/edit': '/projects',
  '/jobs/details': '/projects',
  '/todo-list': '/tasks',
  '/blog/list': '/articles',
  '/blog/post': '/articles',
  '/blog/create': '/articles',
  '/blog/edit': '/articles',
  '/theme/colors': '/settings/appearance',
  '/theme/typography': '/components',
  '/theme/component/button': '/components',
  '/verify-code': '/login',
  '/maintenance': '/',
};
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage crash />,
    children: [
      { path: '/', element: page(<Dashboard />) },
      { path: '/customers', element: page(<Customers />) },
      { path: '/orders', element: page(<Orders />) },
      { path: '/projects', element: page(<Projects />) },
      { path: '/tasks', element: page(<Tasks />) },
      { path: '/calendar', element: page(<Calendar />) },
      { path: '/articles', element: page(<Articles />) },
      { path: '/settings', element: page(<Settings />) },
      { path: '/settings/appearance', element: page(<Settings />) },
      { path: '/settings/notifications', element: page(<Settings />) },
      { path: '/components', element: page(<Components />) },
    ],
  },
  ...['/login', '/register', '/reset-password'].map((path) => ({
    path,
    element: page(<Auth key={path} />),
    errorElement: <ErrorPage crash />,
  })),
  ...Object.entries(aliases).map(([path, to]) => ({ path, element: <Navigate to={to} replace /> })),
  { path: '*', element: <ErrorPage /> },
]);
