import SpaceDashboardOutlined from '@mui/icons-material/SpaceDashboardOutlined';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import FolderOutlined from '@mui/icons-material/FolderOutlined';
import CheckBoxOutlined from '@mui/icons-material/CheckBoxOutlined';
import CalendarMonthOutlined from '@mui/icons-material/CalendarMonthOutlined';
import ArticleOutlined from '@mui/icons-material/ArticleOutlined';
import WidgetsOutlined from '@mui/icons-material/WidgetsOutlined';
import PaletteOutlined from '@mui/icons-material/PaletteOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import LoginRounded from '@mui/icons-material/LoginRounded';

/** One navigation registry drives sidebar links, page search, and document titles. */
export const navigation = [
  {
    label: 'Overview',
    path: '/',
    icon: SpaceDashboardOutlined,
    section: 'Workspace',
    description: 'Your workspace at a glance',
  },
  {
    label: 'Customers',
    path: '/customers',
    icon: PeopleAltOutlined,
    section: 'Workspace',
    description: 'People and organizations',
  },
  {
    label: 'Orders',
    path: '/orders',
    icon: ShoppingBagOutlined,
    section: 'Workspace',
    description: 'Purchases and payments',
  },
  {
    label: 'Projects',
    path: '/projects',
    icon: FolderOutlined,
    section: 'Workspace',
    description: 'Your team’s work in progress',
  },
  {
    label: 'Tasks',
    path: '/tasks',
    icon: CheckBoxOutlined,
    section: 'Workspace',
    description: 'A little more done, every day',
  },
  {
    label: 'Calendar',
    path: '/calendar',
    icon: CalendarMonthOutlined,
    section: 'Workspace',
    description: 'Make room for what matters',
  },
  {
    label: 'Articles',
    path: '/articles',
    icon: ArticleOutlined,
    section: 'Workspace',
    description: 'Stories, updates, and ideas',
  },
  {
    label: 'Components',
    path: '/components',
    icon: WidgetsOutlined,
    section: 'Resources',
    description: 'The building blocks of your next idea',
  },
  {
    label: 'Appearance',
    path: '/settings/appearance',
    icon: PaletteOutlined,
    section: 'Resources',
    description: 'Make this space your own',
  },
  {
    label: 'Authentication',
    path: '/login',
    icon: LoginRounded,
    section: 'Resources',
    description: 'Sign in and registration examples',
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: SettingsOutlined,
    section: 'Resources',
    description: 'Your profile and workspace preferences',
  },
];
