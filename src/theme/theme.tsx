import {createTheme} from "@mui/material";
import { themeShadows } from './shadows';

const sidebarColors = {
  sidebarIconColor: '#94a8bd',
  sidebarIconColorHover: '#94a8bd',
  sidebarIconColorActive: '#54afff',
  sidebarButtonBackgroundColorHover: '#f5f7ff',
  sidebarButtonBackgroundColorActive: '#e6f4ff',
  sidebarButtonTextColor: '#70768a',
  sidebarButtonTextColorActive: '#3198ff',
  sidebarButtonTextColorHover: '#70768a',
  sidebarTextColor: '#70768a',
}

export const Colors = {
  primary: "#116af6",
  secondary: "#FF5252",
  baseTextColor: '#0C1722',
  textGray: '#6A6A6A',
  ...sidebarColors
}

export const AppTheme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary
    },
    text: {
      primary: Colors.baseTextColor
    },
    divider: 'rgba(0, 0, 0, 0.10)',
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: [
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
          backgroundColor: '#fdfdfd',
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
          borderRight: '1px dashed rgba(0, 0, 0, 0.1)',
        }
      }
    },
  },
});
