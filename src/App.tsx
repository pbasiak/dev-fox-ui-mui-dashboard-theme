import { CssBaseline, Fade, ThemeProvider } from '@mui/material';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { routes } from './contants/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCurrentUser } from './hooks/api/use-current-user/useCurrentUser';
import { Loader } from './components/loader/Loader';
import { ThemeConfigurator } from './demo/theme-configurator/ThemeConfigurator';
import React, { Suspense, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { getThemeByName } from './theme/theme.ts';
import { SidebarLayout } from './layouts/sidebar-layout/SidebarLayout.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/rajdhani/300.css';
import '@fontsource/rajdhani/400.css';
import '@fontsource/rajdhani/500.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
const UserAccountPage = React.lazy(() => import('./pages/user/user-account-page/UserAccountPage'));
const UserProfilePage = React.lazy(() => import('./pages/user/user-profile-page/UserProfilePage'));
const UserListPage = React.lazy(() => import('./pages/user/user-list-page/UserListPage'));
const UserEditPage = React.lazy(() => import('./pages/user/user-edit-page/UserEditPage'));
const UserCreatePage = React.lazy(() => import('./pages/user/user-create-page/UserCreatePage'));
const BlogPage = React.lazy(() => import('./pages/blog/blog-page/BlogPage'));
const BlogPostPage = React.lazy(() => import('./pages/blog/blog-post-page/BlogPostPage'));
const CreatePostBlogPage = React.lazy(() => import('./pages/blog/create-post-blog-page/CreatePostBlogPage'));
const EditPostBlogPage = React.lazy(() => import('./pages/blog/edit-post-blog-page/EditPostBlogPage'));
const ColorsPage = React.lazy(() => import('./docs/pages/colors-page/ColorsPage'));
const TypographyPage = React.lazy(() => import('./docs/pages/typography-page/TypographyPage'));
const ButtonPage = React.lazy(() => import('./docs/pages/button-page/ButtonPage'));
const CalendarPage = React.lazy(() => import('./pages/calendar/Calendar'));
const TodoList = React.lazy(() => import('./pages/todo-list/TodoList'));
const OrderList = React.lazy(() => import('./pages/orders/orders-list/OrdersList'));
const OrderDetails = React.lazy(() => import('./pages/orders/order-details/OrderDetails'));
const JobsList = React.lazy(() => import('./pages/jobs/jobs-list/JobsListPage'));
const JobsDetails = React.lazy(() => import('./pages/jobs/jobs-details/JobsDetails'));
const JobsCreate = React.lazy(() => import('./pages/jobs/jobs-create/JobsCreate'));
const JobsEdit = React.lazy(() => import('./pages/jobs/jobs-edit/JobsEdit'));
const NotFoundPage = React.lazy(() => import('./pages/not-found/NotFoundPage'));
const MaintenancePage = React.lazy(() => import('./pages/maintenance/MaintenancePage'));
const LoginPage = React.lazy(() => import('./pages/login/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/register/RegisterPage'));
const ResetPassword = React.lazy(() => import('./pages/reset-password/ResetPassword'));
const VerifyCode = React.lazy(() => import('./pages/verify-code/VerifyCode'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SidebarLayout>
        <Suspense>
          <Fade in={true} timeout={500}>
            <div>
              <Outlet />
            </div>
          </Fade>
        </Suspense>
      </SidebarLayout>
    ),
    children: [
      {
        path: routes.dashboard,
        element: <Dashboard />,
      },
      {
        path: routes.userAccount,
        element: <UserAccountPage />,
      },
      {
        path: routes.userProfile,
        element: <UserProfilePage />,
      },
      {
        path: routes.userList,
        element: <UserListPage />,
      },
      {
        path: routes.userEdit,
        element: <UserEditPage />,
      },
      {
        path: routes.userCreate,
        element: <UserCreatePage />,
      },
      {
        path: routes.blog,
        element: <BlogPage />,
      },
      {
        path: routes.blogPost,
        element: <BlogPostPage />,
      },
      {
        path: routes.blogCreatePost,
        element: <CreatePostBlogPage />,
      },
      {
        path: routes.blogEditPost,
        element: <EditPostBlogPage />,
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
        path: routes.calendar,
        element: <CalendarPage />,
      },
      {
        path: routes.todoList,
        element: <TodoList />,
      },
      {
        path: routes.ordersList,
        element: <OrderList />,
      },
      {
        path: routes.ordersDetails,
        element: <OrderDetails />,
      },
      {
        path: routes.jobsList,
        element: <JobsList />,
      },
      {
        path: routes.jobsDetails,
        element: <JobsDetails />,
      },
      {
        path: routes.jobsCreate,
        element: <JobsCreate />,
      },
      {
        path: routes.jobsEdit,
        element: <JobsEdit />,
      },
    ],
  },
  {
    path: routes.notFound,
    element: (
      <Suspense>
        <NotFoundPage />
      </Suspense>
    ),
  },
  {
    path: routes.maintenance,
    element: (
      <Suspense>
        <MaintenancePage />
      </Suspense>
    ),
  },
  {
    path: routes.login,
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: routes.register,
    element: (
      <Suspense>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: routes.resetPassword,
    element: (
      <Suspense>
        <ResetPassword />
      </Suspense>
    ),
  },
  {
    path: routes.verifyCode,
    element: (
      <Suspense>
        <VerifyCode />
      </Suspense>
    ),
  },
]);

const queryClient = new QueryClient();

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const AppRouter = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader />;
  }
  if (!user) return null;
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const [themeName, setThemeName] = useState<'appTheme' | 'shadTheme' | 'cyberpunkTheme'>('cyberpunkTheme');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = getThemeByName(themeName, mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Analytics />
        <QueryClientProvider client={queryClient}>
          <>
            <AppRouter />
            <ThemeConfigurator setThemeName={setThemeName} themeName={themeName} />
          </>
        </QueryClientProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
