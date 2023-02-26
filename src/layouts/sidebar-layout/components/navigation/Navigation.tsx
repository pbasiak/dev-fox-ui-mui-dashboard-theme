import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { NavigationItem } from './components/navigation-item/NavigationItem';
import { NavigationItemType } from './components/navigation-item/types';
import {
  Abc,
  AccountBox,
  ColorLens,
  DesignServices, Edit,
  Notes,
  People,
  Person,
  PersonAdd, PostAdd,
  ShapeLine, ShortText,
} from '@mui/icons-material';
import { routes } from '../../../../contants/routes';

const menuItems: NavigationItemType[] = [
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
        label: 'List (Columns: 1)',
        icon: (props:any) => <Notes {...props} />,
      },
      {
        path: routes.blog2x,
        label: 'List (Columns: 2)',
        icon: (props:any) => <Notes {...props} />,
      },
      {
        path: routes.blog3x,
        label: 'List (Columns: 3)',
        icon: (props:any) => <Notes {...props} />,
      },
      {
        path: routes.blogPost,
        label: 'Post',
        icon: (props:any) => <ShortText {...props} />,
      },
      {
        path: routes.blogEditPost,
        label: 'Edit',
        icon: (props:any) => <Edit {...props} />,
      },
      {
        path: routes.blogCreatePost,
        label: 'Create',
        icon: (props:any) => <PostAdd {...props} />,
      },
    ]
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
]

export function Navigation() {
  const navigationItems = menuItems.map((item) => {
    return (
      <NavigationItem key={Object.values(item).toString()} {...item} />
    );
  });

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: 2 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {navigationItems}
    </List>
  );
}
