import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppTheme } from './theme/theme';
import { Dashboard } from './pages/dashboard/Dashboard';
import { TypographyPage } from './docs/pages/typography-page/TypographyPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
    path: routes.blogPost,
    element: <BlogPostPage />
  },
  {
    path: routes.blogCreatePost,
    element: <CreatePostBlogPage />
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
    path: routes.notFound,
    element: <NotFoundPage />,
  },
  {
    path: routes.maintenance,
    element: <MaintenancePage />
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
  {
    path: '*',
    element: <NotFoundPage />,
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
