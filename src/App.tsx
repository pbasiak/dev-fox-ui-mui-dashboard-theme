import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppTheme } from './theme/theme';
import { Dashboard } from './pages/dashboard/Dashboard';
import { TypographyPage } from './docs/pages/typography-page/TypographyPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './contants/routes';
import { SidebarLayout } from './layouts/sidebar-layout/SidebarLayout';
import { ColorsPage } from './docs/pages/colors-page/ColorsPage';
import { UserAccountPage } from './pages/user/user-account-page/UserAccountPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCurrentUser } from './hooks/api/use-current-user/useCurrentUser';
import { Loader } from './components/loader/Loader';
import { PageNotFound } from './components/page-not-found/PageNotFound';
import { ButtonPage } from './docs/pages/button-page/ButtonPage';
import { UserProfilePage } from './pages/user/user-profile-page/UserProfilePage';
import { UserListPage } from './pages/user/user-list-page/UserListPage';
import { UserCreatePage } from './pages/user/user-create-page/UserCreatePage';
import { BlogPage } from './pages/blog/blog-page/BlogPage';

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
    path: routes.userProfile,
    element: <UserProfilePage />
  },
  {
    path: routes.userList,
    element: <UserListPage />
  },
  {
    path: routes.userCreate,
    element: <UserCreatePage />
  },
  {
    path: routes.blog,
    element: <BlogPage />
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
    path: routes.componentsButton,
    element: <ButtonPage />,
  },
  {
    path: '*',
    element: <SidebarLayout><PageNotFound /></SidebarLayout>,
  },
])

const queryClient = new QueryClient();

const AppRouter = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader />;
  }
  if (!user) return null;
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
