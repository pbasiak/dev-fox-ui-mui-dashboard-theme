import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppTheme } from './theme/theme';
import { Dashboard } from './pages/dashboard/Dashboard';
import { TypographyPage } from './demo-pages/typography-page/TypographyPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './contants/routes';
import { SidebarLayout } from './layouts/sidebar-layout/SidebarLayout';
import { ColorsPage } from './demo-pages/colors-page/ColorsPage';
import { UserAccountPage } from './pages/user-account-page/UserAccountPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUser } from './hooks/api/use-user/useUser';
import { Loader } from './components/loader/Loader';

const router = createBrowserRouter([
  {
    path: routes.dashboard,
    element: <Dashboard />,
  },
  {
    path: routes.userAccount,
    element: <UserAccountPage />
  },
  {
    path: routes.themeColors,
    element: <ColorsPage />,
  },
  {
    path: routes.themeTypography,
    element: <TypographyPage />,
  },
  {
    path: '*',
    element: <SidebarLayout>Not ready</SidebarLayout>,
  },
])

const queryClient = new QueryClient();

const AppRouter = () => {
  const user = useUser();
  if (!user) {
    return <Loader />;
  }
  return (<RouterProvider router={router} />)
}

export function App () {
  return <ThemeProvider theme={AppTheme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </ThemeProvider>;
}
