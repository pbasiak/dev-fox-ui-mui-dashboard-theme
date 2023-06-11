import {
  Box,
  Drawer,
  IconButton, Stack,
  styled,
  Toolbar,
  useTheme,
} from '@mui/material';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ReactNode } from 'react';
import { Navigation } from './components/navigation/Navigation';

import { ToolbarElements } from './components/toolbar-elements/ToolbarElements';
import { useNavigation } from './components/navigation/hooks/use-navigation/useNavigation';
import { Logo } from '../../components/logo/Logo';

const drawerWidth = 270;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4, 1, 2, 4),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

interface Props {
  children: ReactNode;
}

export function SidebarLayout({children}: Props) {
  const theme = useTheme();
  const { isSidebarOpen, toggleSidebar } = useNavigation();

  return (
    <Box>
      <AppBar position="relative" open={isSidebarOpen} color='transparent'>
        <Toolbar>
          <Stack justifyContent={isSidebarOpen ? 'flex-end' : 'space-between'} direction={'row'} flex={1} alignItems={'center'}>
            <IconButton
              color="inherit"
              aria-label="open navigation"
              onClick={toggleSidebar}
              edge="start"
              sx={{ mr: 2, ...(isSidebarOpen && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <ToolbarElements />
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isSidebarOpen}
      >
        <DrawerHeader>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-start'}>
            <Logo />
          </Stack>
          <IconButton onClick={toggleSidebar}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Navigation />
      </Drawer>
      <Main open={isSidebarOpen}>
        {/*<DrawerHeader />*/}
        {children}
      </Main>
    </Box>
  );
}