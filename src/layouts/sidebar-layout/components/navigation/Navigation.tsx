import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { NavigationItem } from './components/navigation-item/NavigationItem';
import { NavigationItemType } from './components/navigation-item/types';
import { ImportContacts, SignalWifiConnectedNoInternet4 } from '@mui/icons-material';

const menuItems: NavigationItemType[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: (props: any) => <DashboardIcon {...props} />,
  },
  {
    path: '/random',
    label: 'Contacts',
    icon: (props:any) => <ImportContacts {...props} />,
  },
  {
    label: 'Nested',
    icon: (props: any) => <InboxIcon {...props} />,
    items: [
      {
        path: '/nested/1',
        label: 'Nested 1',
        icon: (props: any) => <InboxIcon {...props} />,
      },
      {
        path: '/nested/2',
        label: 'Nested 2',
        icon: (props: any) => <SignalWifiConnectedNoInternet4 {...props} />,
      },
    ]
  }
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
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"sx={{ textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold', pl: 2.2 }}>
          Navigation
        </ListSubheader>
      }
    >
      {navigationItems}
    </List>
  );
}
