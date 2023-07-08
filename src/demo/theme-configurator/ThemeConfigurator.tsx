import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Close, Lightbulb, LightbulbOutlined, Tune } from '@mui/icons-material';
import { Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';
import { useCallback } from 'react';
import { ColorModeContext } from '../../App';

export function ThemeConfigurator() {
  const [open, setOpen] = React.useState(false);
  const isDarkTheme = useTheme().palette.mode === 'dark';
  const [mode, setMode] = React.useState<'light' | 'dark'>(isDarkTheme ? 'dark' : 'light');
  const colorMode = React.useContext(ColorModeContext);

  const toggleDrawer = useCallback(() => {
    setOpen((prev) => !prev);
  }, [])

  const handleModeChange = useCallback((event: React.MouseEvent<HTMLElement>, newMode: 'light' | 'dark') => {
    setMode(isDarkTheme ? 'light' : 'dark');
    colorMode.toggleColorMode();
  }, [colorMode, isDarkTheme]);

  return (
    <React.Fragment key={'right'}>
      <IconButton size={'large'} color={'primary'} onClick={toggleDrawer} sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 100, backgroundColor: 'background.paper' }}>
        <Tune fontSize={'large'} color={'inherit'} />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={open}
        onClose={toggleDrawer}
        hideBackdrop={true}
        transitionDuration={500}
        elevation={20}
      >
        <Box
          sx={{ width: 350 }}
          role="presentation"
        >
          <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant={'h6'}>Theme configurator</Typography>
            <Box>
              <IconButton onClick={toggleDrawer}>
                <Close />
              </IconButton>
            </Box>
          </Box>

          <Stack sx={{ p: 2}}>
            <Box>
              <Typography variant={'body2'} color={'text.secondary'} textTransform={'uppercase'} mb={2}>Mode</Typography>
              <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={handleModeChange}
                aria-label="theme mode"
                fullWidth
              >
                <ToggleButton value="light" aria-label="light theme">
                  <LightbulbOutlined />
                  Light
                </ToggleButton>
                <ToggleButton value="dark" aria-label="dark theme">
                  <Lightbulb />
                  Dark
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}