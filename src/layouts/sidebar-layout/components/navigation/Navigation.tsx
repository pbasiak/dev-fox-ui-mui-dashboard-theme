import List from '@mui/material/List';
import { NavigationItem } from './components/navigation-item/NavigationItem';
import { NavigationItemType } from './components/navigation-item/types';
import { routes } from '../../../../contants/routes';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
  Abc,
  AccountBox,
  CalendarMonth, ColorLens, Construction, DesignServices, ListAlt, Login,
  Notes,
  People,
  Person,
  PersonAdd,
  PostAdd, QuestionMark, ShapeLine,
  ShortText, ViewStream,
} from '@mui/icons-material';
import { useMemo } from 'react';
import { useNotifications } from '../../../../hooks/api/use-notifications/useNotifications';

export function Navigation() {
  const { data: notifications } = useNotifications();

  console.log(notifications);

  const navigationItems: NavigationItemType[] = useMemo(() => [
    {
      header: 'Dashboards',
    },
    {
      path: routes.dashboard,
      label: 'Dashboard',
      icon: (props: any) => <DashboardIcon {...props} />,
    },
    {
      header: 'Apps & Pages',
    },
    {
      label: 'User',
      icon: (props: any) => <AccountBox {...props} />,
      items: [
        {
          path: routes.userAccount,
          label: 'Account',
          icon: (props:any) => <Person {...props} />,
        },
        {
          path: routes.userProfile,
          label: 'Public profile',
          icon: (props:any) => <Person {...props} />,
        },
        {
          path: routes.userList,
          label: 'List',
          icon: (props:any) => <People {...props} />,
        },
        {
          path: routes.userCreate,
          label: 'Create',
          icon: (props:any) => <PersonAdd {...props} />,
        },
      ]
    },
    {
      label: 'Blog',
      icon: (props: any) => <Notes {...props} />,
      items: [
        {
          path: routes.blog,
          label: 'List',
          icon: (props:any) => <Notes {...props} />,
        },
        {
          path: routes.blogPost,
          label: 'Post',
          icon: (props:any) => <ShortText {...props} />,
        },
        {
          path: routes.blogCreatePost,
          label: 'Create',
          icon: (props:any) => <PostAdd {...props} />,
        },
      ]
    },
    {
      label: 'Orders',
      icon: (props: any) => <Abc {...props} />,
      items: [
        {
          path: routes.ordersList,
          label: 'List',
          icon: (props:any) => <Abc {...props} />,
        },
      ]
    },
    {
      label: 'Jobs',
      icon: (props: any) => <Abc {...props} />,
      items: [
        {
          path: routes.jobsCreate,
          label: 'Create',
          icon: (props:any) => <Abc {...props} />,
        },
        {
          path: routes.jobsList,
          label: 'List',
          icon: (props:any) => <Abc {...props} />,
        },
        {
          path: routes.jobsDetails,
          label: 'Details',
          icon: (props:any) => <Abc {...props} />,
        },
      ]
    },
    {
      header: 'Apps',
    },
    {
      path: routes.calendar,
      label: 'Calendar',
      icon: (props: any) => <CalendarMonth {...props} />,
    },
    {
      path: routes.todoList,
      label: 'Tasks',
      icon: (props: any) => <ListAlt {...props} />,
    },
    {
      header: 'Other pages',
    },
    {
      path: routes.notFound,
      label: 'Page not found',
      icon: (props: any) => <QuestionMark {...props} />,
    },
    {
      path: routes.maintenance,
      label: 'Maintenance',
      icon: (props: any) => <Construction {...props} />,
    },
    {
      header: 'Authentication',
    },
    {
      path: routes.login,
      label: 'Login',
      icon: (props: any) => <Login {...props} />,
    },
    {
      header: 'Documentation',
    },
    {
      label: 'Theme',
      icon: (props: any) => <DesignServices {...props} />,
      items: [
        {
          path: routes.themeGeneral,
          label: 'General',
          icon: (props:any) => <DashboardIcon {...props} />,
        },
        {
          path: routes.themeTypography,
          label: 'Typography',
          icon: (props:any) => <Abc {...props} />,
        },
        {
          path: routes.themeColors,
          label: 'Colors',
          icon: (props:any) => <ColorLens {...props} />,
        },
      ]
    },
    {
      label: 'Components',
      icon: (props: any) => <ShapeLine {...props} />,
      items: [
        {
          path: routes.componentsButton,
          label: 'Button',
          icon: (props:any) => <DashboardIcon {...props} />,
        },
      ]
    },
    {
      header: 'Navigation',
    },
    {
      path: '',
      label: 'Number',
      icon: (props: any) => <ViewStream {...props} />,
      badgeText: `${notifications?.notifications?.length}`,
      badgeColor: 'primary',
    },
    {
      path: '',
      label: 'Text (primary)',
      icon: (props: any) => <ViewStream {...props} />,
      badgeText: 'New',
      badgeColor: 'primary',
    },
    {
      path: '',
      label: 'Text (secondary)',
      icon: (props: any) => <ViewStream {...props} />,
      badgeText: 'New',
      badgeColor: 'secondary',
    },
    {
      path: '',
      label: 'Text (info)',
      icon: (props: any) => <ViewStream {...props} />,
      badgeText: 'New',
      badgeColor: 'info',
    },
    {
      path: '',
      label: 'Very long text as a link text',
      icon: (props: any) => <ViewStream {...props} />,
      badgeText: 'New',
      badgeColor: 'info',
      external: true,
    },
  ], [notifications?.notifications?.length])

  const navigationItemsList = navigationItems.map((item) => {
    return (
      <NavigationItem key={Object.values(item).toString()} item={item} />
    );
  });

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, padding: 2 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {navigationItemsList}
    </List>
  );
}
