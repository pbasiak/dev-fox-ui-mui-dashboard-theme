import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Popover,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuRounded from '@mui/icons-material/MenuRounded';
import SearchRounded from '@mui/icons-material/SearchRounded';
import NotificationsNoneRounded from '@mui/icons-material/NotificationsNoneRounded';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import UnfoldMoreRounded from '@mui/icons-material/UnfoldMoreRounded';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { Logo } from '../components/logo';
import { navigation } from './navigation';
import { PageSearch } from './page-search';
import { usePreferences } from '../theme/preferences';
import { useLocalStorage } from '../hooks/use-local-storage';

const sidebarWidth = 236;
export function AppLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileAnchor, setProfileAnchor] = useState<HTMLElement | null>(null);
  const [notificationAnchor, setNotificationAnchor] = useState<HTMLElement | null>(null);
  const [read, setRead] = useLocalStorage('devfox:notifications-read', false);
  const [profile] = useLocalStorage('devfox:profile', {
    name: 'Alex Morgan',
    email: 'alex@devfox.design',
    role: 'Workspace admin',
    bio: '',
  });
  const { preferences, updatePreferences } = usePreferences();
  const current =
    navigation.find((item) => item.path === location.pathname) ??
    navigation.find((item) => item.path !== '/' && location.pathname.startsWith(item.path));
  useEffect(() => {
    document.title = `${current?.label ?? 'Workspace'} · DevFox`;
  }, [current?.label]);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen((value) => !value);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);
  const sidebar = (
    <Stack sx={{ height: '100%', px: 2 }}>
      <Stack
        direction='row'
        sx={{ alignItems: 'center', justifyContent: 'space-between', px: 1, height: 85, flexShrink: 0 }}
      >
        <Logo />
        <IconButton aria-label='Close navigation' onClick={() => setMobileOpen(false)} sx={{ display: { md: 'none' } }}>
          <CloseRounded />
        </IconButton>
      </Stack>
      <Button
        component={Link}
        to='/settings'
        variant='outlined'
        color='inherit'
        endIcon={<UnfoldMoreRounded fontSize='small' />}
        sx={{ justifyContent: 'space-between', p: 1.2, mb: 2, textAlign: 'left' }}
      >
        <Stack direction='row' sx={{ gap: 1.2, alignItems: 'center' }}>
          <Avatar
            variant='rounded'
            sx={{ width: 31, height: 31, bgcolor: 'action.hover', color: 'text.primary', fontSize: 14 }}
          >
            D
          </Avatar>
          <Box>
            <Typography variant='subtitle2'>DevFox workspace</Typography>
            <Typography variant='caption' sx={{ color: 'text.secondary' }}>
              Personal workspace
            </Typography>
          </Box>
        </Stack>
      </Button>
      <Box component='nav' aria-label='Main navigation' sx={{ flex: 1 }}>
        {['Workspace', 'Resources'].map((section) => (
          <Box key={section} sx={{ mb: 2 }}>
            <Typography variant='overline' sx={{ color: 'text.secondary', px: 1.5 }}>
              {section}
            </Typography>
            <List component='div' disablePadding sx={{ mt: 1 }}>
              {navigation
                .filter((item) => item.section === section)
                .map((item) => (
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    key={item.path}
                    selected={
                      location.pathname === item.path ||
                      (item.path !== '/' && item.path !== '/settings' && location.pathname.startsWith(item.path))
                    }
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      borderRadius: '8px',
                      py: 0.8,
                      px: 1.5,
                      mb: 0.45,
                      minHeight: 40,
                      color: 'text.secondary',
                      '&.Mui-selected': {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.09),
                        color: 'primary.main',
                        '&::after': {
                          content: '""',
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                        },
                      },
                      '&.Mui-selected:hover': { bgcolor: (theme) => alpha(theme.palette.primary.main, 0.14) },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 32, color: 'inherit' }}>
                      <item.icon sx={{ fontSize: 19 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      slotProps={{ primary: { sx: { fontSize: 12.5, fontWeight: 550 } } }}
                    />
                    {item.label === 'Components' && (
                      <Chip label='UI' sx={{ fontSize: 9, height: 18, bgcolor: 'action.hover' }} />
                    )}
                  </ListItemButton>
                ))}
            </List>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          p: 1.7,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '12px',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.025),
          mb: 2,
        }}
      >
        <AutoAwesomeOutlined sx={{ color: 'primary.main', fontSize: 21 }} />
        <Typography variant='subtitle2' sx={{ mt: 0.7 }}>
          A head start for your next idea
        </Typography>
        <Typography variant='caption' sx={{ color: 'text.secondary', display: 'block', mt: 0.5, mb: 1.3 }}>
          Thoughtful components. Yours to make your own.
        </Typography>
        <Button
          component={Link}
          to='/components'
          size='small'
          variant='outlined'
          fullWidth
          endIcon={<ArrowOutwardRounded sx={{ fontSize: 14 }} />}
        >
          Explore the UI kit
        </Button>
      </Box>
      <Stack direction='row' sx={{ alignItems: 'center', gap: 0.7, p: 1, pb: 2 }}>
        <Box sx={{ width: 5, height: 5, bgcolor: 'success.main', borderRadius: '50%' }} />
        <Typography variant='caption' sx={{ color: 'text.secondary', fontSize: 10 }}>
          DevFox v1.0
        </Typography>
        <Typography variant='caption' sx={{ color: 'text.secondary', ml: 'auto', fontSize: 10 }}>
          Made to be yours
        </Typography>
      </Stack>
    </Stack>
  );
  return (
    <Box>
      <a className='skip-link' href='#main-content'>
        Skip to content
      </a>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { width: sidebarWidth, borderRight: '1px solid', borderColor: 'divider' },
        }}
      >
        {sidebar}
      </Drawer>
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ display: { md: 'none' }, '& .MuiDrawer-paper': { width: sidebarWidth } }}
      >
        {sidebar}
      </Drawer>
      <Box sx={{ ml: { md: `${sidebarWidth}px` }, minWidth: 0 }}>
        <Stack
          component='header'
          direction='row'

          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            height: 72,
            px: { xs: 2, lg: 4 },
            borderBottom: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
          }}
        >
          <Stack direction='row' sx={{ alignItems: 'center', gap: 1.5 }}>
            <IconButton
              aria-label='Open navigation'
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' } }}
            >
              <MenuRounded />
            </IconButton>
            <Typography variant='body2' sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}>
              Workspace
            </Typography>
            <Typography sx={{ color: 'text.disabled', display: { xs: 'none', sm: 'block' } }}>/</Typography>
            <Typography variant='body2' sx={{ fontWeight: 550 }}>
              {current?.label ?? 'Workspace'}
            </Typography>
          </Stack>
          <Stack direction='row' sx={{ alignItems: 'center', gap: { xs: 0.5, sm: 1.3 } }}>
            <Button
              color='inherit'
              startIcon={<SearchRounded sx={{ fontSize: 18 }} />}
              onClick={() => setSearchOpen(true)}
              sx={{ color: 'text.secondary', display: { xs: 'none', lg: 'inline-flex' }, fontWeight: 400, mr: 1 }}
            >
              Search anything…
              <Box
                component='kbd'
                sx={{ ml: 3, fontSize: 10, border: '1px solid', borderColor: 'divider', borderRadius: 1, px: 0.6 }}
              >
                ⌘ K
              </Box>
            </Button>
            <IconButton aria-label='Search pages' onClick={() => setSearchOpen(true)} sx={{ display: { lg: 'none' } }}>
              <SearchRounded fontSize='small' />
            </IconButton>
            <Tooltip title={`Switch to ${preferences.mode === 'light' ? 'dark' : 'light'} mode`}>
              <IconButton
                aria-label='Toggle color mode'
                onClick={() => updatePreferences({ mode: preferences.mode === 'light' ? 'dark' : 'light' })}
              >
                {preferences.mode === 'light' ? (
                  <DarkModeOutlined sx={{ fontSize: 19 }} />
                ) : (
                  <LightModeOutlined sx={{ fontSize: 19 }} />
                )}
              </IconButton>
            </Tooltip>
            <IconButton aria-label='Notifications' onClick={(event) => setNotificationAnchor(event.currentTarget)}>
              <Badge color='primary' variant='dot' invisible={read}>
                <NotificationsNoneRounded sx={{ fontSize: 20 }} />
              </Badge>
            </IconButton>
            <Divider orientation='vertical' flexItem sx={{ my: 1, mx: 0.5 }} />
            <Button
              color='inherit'
              onClick={(event) => setProfileAnchor(event.currentTarget)}
              sx={{ p: 0.2, minWidth: 0, gap: 1.1 }}
              aria-label='Open account menu'
            >
              <Avatar sx={{ width: 33, height: 33, bgcolor: '#f1ddc5', color: '#765131' }}>
                {profile.name
                  .split(' ')
                  .map((name) => name[0])
                  .slice(0, 2)
                  .join('')}
              </Avatar>
              <Box sx={{ textAlign: 'left', display: { xs: 'none', xl: 'block' } }}>
                <Typography variant='subtitle2' sx={{ fontSize: 11.5 }}>
                  {profile.name}
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.secondary', fontSize: 10 }}>
                  {profile.role}
                </Typography>
              </Box>
              <KeyboardArrowDownRounded sx={{ fontSize: 16, color: 'text.secondary' }} />
            </Button>
          </Stack>
        </Stack>
        <Box
          component='main'
          id='main-content'
          tabIndex={-1}
          sx={{
            px: { xs: 2, sm: 3, lg: preferences.compact ? 3 : 4 },
            py: { xs: 3, lg: preferences.compact ? 3 : 4 },
            maxWidth: 1680,
            mx: 'auto',
            outline: 'none',
          }}
        >
          <Outlet />
        </Box>
        <Stack
          component='footer'
          direction='row'

          sx={{ justifyContent: 'space-between', gap: 2, px: { xs: 2, lg: 4 }, py: 2.5 }}
        >
          <Typography variant='caption' sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} DevFox. A little more possible.
          </Typography>
          <Typography variant='caption' sx={{ color: 'text.secondary' }}>
            Demo workspace
          </Typography>
        </Stack>
      </Box>
      <PageSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Menu anchorEl={profileAnchor} open={Boolean(profileAnchor)} onClose={() => setProfileAnchor(null)}>
        <MenuItem component={Link} to='/settings' onClick={() => setProfileAnchor(null)}>
          Account settings
        </MenuItem>
        <MenuItem component={Link} to='/settings/appearance' onClick={() => setProfileAnchor(null)}>
          Appearance
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to='/login' onClick={() => setProfileAnchor(null)}>
          View sign-in example
        </MenuItem>
      </Menu>
      <Popover
        anchorEl={notificationAnchor}
        open={Boolean(notificationAnchor)}
        onClose={() => setNotificationAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ width: 330, maxWidth: '90vw', p: 2.5 }}>
          <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='h4'>Notifications</Typography>
            <Button size='small' onClick={() => setRead(true)} disabled={read}>
              {read ? 'All read' : 'Mark all read'}
            </Button>
          </Stack>
          {[
            {
              title: 'A new chapter is ready',
              body: 'Explore the refreshed DevFox component library.',
              link: '/components',
              time: 'Just now',
            },
            {
              title: 'Your workspace, your style',
              body: 'Try four themes in light and dark mode.',
              link: '/settings/appearance',
              time: '2 hours ago',
            },
          ].map((item) => (
            <Box
              key={item.title}
              component={Link}
              to={item.link}
              onClick={() => {
                setNotificationAnchor(null);
                setRead(true);
              }}
              sx={{
                display: 'block',
                textDecoration: 'none',
                py: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant='subtitle2'>{item.title}</Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', mt: 0.4 }}>
                {item.body}
              </Typography>
              <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                {item.time}
              </Typography>
            </Box>
          ))}
        </Box>
      </Popover>
    </Box>
  );
}
