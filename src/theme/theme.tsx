import {createTheme} from "@mui/material";
import { themeShadows } from './shadows';

export const AppTheme = createTheme({
  palette: {
    primary: {
      main: '#2f63f8', //"#116af6",
    },
    secondary: {
      main: '#fafaff',
    },
    text: {
      primary: "#0C1722",
    },
    divider: 'rgba(0, 0, 0, 0.10)',
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: [
      '"Source Sans Pro"',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  shadows: themeShadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f2f4f8',
        }
      }
    },
    MuiButton: {
      defaultProps: {
        // disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
        },
        contained: {
          boxShadow: '5px 3px 0px 0 rgba(16, 141, 255, 0.1)',
        },
        sizeSmall: {
          padding: '2px 12px',
        },
        sizeMedium: {
          padding: '6px 18px',
        },
        sizeLarge: {
          padding: '10px 24px',
        },
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          // borderRight: '1px solid rgba(0, 0, 0, 0.05)',
          // boxShadow: themeShadows[3],
        }
      }
    },
  },
});

const sidebarColors = {
  sidebarIconColor: AppTheme.palette.grey[500],
  sidebarIconColorHover: AppTheme.palette.primary.dark,
  sidebarIconColorActive: AppTheme.palette.primary.main,
  sidebarButtonBackgroundColorHover: `${AppTheme.palette.primary.main}1A`,
  sidebarButtonBackgroundColorActive: `${AppTheme.palette.primary.main}26`,
  sidebarButtonTextColor: AppTheme.palette.text.secondary,
  sidebarButtonTextColorActive: AppTheme.palette.primary.main, //'#3198ff',
  sidebarButtonTextColorHover: AppTheme.palette.primary.dark,
  sidebarTextColor: AppTheme.palette.text.secondary,
}

export const Colors = {
  ...sidebarColors
}

