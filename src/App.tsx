import { CssBaseline, ThemeProvider } from '@mui/material';
import { Dashboard } from './pages/dashboard/Dashboard';
import { TypographyPage } from './docs/pages/typography-page/TypographyPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { routes } from './contants/routes';
import { ColorsPage } from './docs/pages/colors-page/ColorsPage';
import { UserAccountPage } from './pages/user/user-account-page/UserAccountPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCurrentUser } from './hooks/api/use-current-user/useCurrentUser';
import { Loader } from './components/loader/Loader';
import { ButtonPage } from './docs/pages/button-page/ButtonPage';
import { UserProfilePage } from './pages/user/user-profile-page/UserProfilePage';
import { UserListPage } from './pages/user/user-list-page/UserListPage';
import { UserCreatePage } from './pages/user/user-create-page/UserCreatePage';
import { BlogPage } from './pages/blog/blog-page/BlogPage';
import { CreatePostBlogPage } from './pages/blog/create-post-blog-page/CreatePostBlogPage';
import { BlogPostPage } from './pages/blog/blog-post-page/BlogPostPage';
import { CalendarPage } from './pages/calendar/Calendar';
import { NotFoundPage } from './pages/not-found/NotFoundPage';
import { MaintenancePage } from './pages/maintenance/MaintenancePage';
import { TodoList } from './pages/todo-list/TodoList';
import { OrderList } from './pages/orders/orders-list/OrdersList';
import { JobsList } from './pages/jobs/jobs-list/JobsListPage';
import { JobsDetails } from './pages/jobs/jobs-details/JobsDetails';
import { JobsCreate } from './pages/jobs/jobs-create/JobsCreate';
import { LoginPage } from './pages/login/LoginPage';
import { RegisterPage } from './pages/register/RegisterPage';
import { ResetPassword } from './pages/reset-password/ResetPassword';
import { VerifyCode } from './pages/verify-code/VerifyCode';
import { ThemeConfigurator } from './demo/theme-configurator/ThemeConfigurator';
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { getThemeByName } from './theme/theme.ts';
import { SidebarLayout } from './layouts/sidebar-layout/SidebarLayout.tsx';
import { UserEditPage } from './pages/user/user-edit-page/UserEditPage.tsx';
import { EditPostBlogPage } from './pages/blog/edit-post-blog-page/EditPostBlogPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SidebarLayout>
        <Outlet />
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
    ],
  },
  {
    path: routes.notFound,
    element: <NotFoundPage />,
  },
  {
    path: routes.maintenance,
    element: <MaintenancePage />,
  },
  {
    path: routes.login,
    element: <LoginPage />,
  },
  {
    path: routes.register,
    element: <RegisterPage />,
  },
  {
    path: routes.resetPassword,
    element: <ResetPassword />,
  },
  {
    path: routes.verifyCode,
    element: <VerifyCode />,
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
  return <RouterProvider router={router} />;
};

export function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const [themeName, setThemeName] = useState<'appTheme' | 'shadTheme'>('shadTheme');
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
