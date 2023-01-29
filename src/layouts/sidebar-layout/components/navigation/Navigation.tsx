import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { NavigationItem } from './components/navigation-item/NavigationItem';
import { NavigationItemType } from './components/navigation-item/types';
import { Abc, AccountBox, ColorLens, DesignServices, People, Person, PersonAdd, ShapeLine } from '@mui/icons-material';

const menuItems: NavigationItemType[] = [
  {
    header: 'Navigation',
  },
  {
    path: '/',
    label: 'Dashboard',
    icon: (props: any) => <DashboardIcon {...props} />,
  },
  {
    header: 'Management',
  },
  {
    label: 'User',
    icon: (props: any) => <AccountBox {...props} />,
    items: [
      {
        path: '/user/account',
        label: 'Account',
        icon: (props:any) => <Person {...props} />,
      },
      {
        path: '/user/example',
        label: 'Public profile',
        icon: (props:any) => <Person {...props} />,
      },
      {
        path: '/user/list',
        label: 'List',
        icon: (props:any) => <People {...props} />,
      },
      {
        path: '/user/create',
        label: 'Create',
        icon: (props:any) => <PersonAdd {...props} />,
      },
    ]
  },
  {
    header: 'Theme',
  },
  {
    label: 'Base',
    icon: (props: any) => <DesignServices {...props} />,
    items: [
      {
        path: '/theme/general',
        label: 'General',
        icon: (props:any) => <DashboardIcon {...props} />,
      },
      {
        path: '/theme/typography',
        label: 'Typography',
        icon: (props:any) => <Abc {...props} />,
      },
      {
        path: '/theme/colors',
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
        path: '/theme/components',
        label: 'TODO',
        icon: (props:any) => <DashboardIcon {...props} />,
      },
    ]
  },
]

export function Navigation() {
  const navigationItems = menuItems.map((item) => {
    return (
      <NavigationItem {...item} />
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
