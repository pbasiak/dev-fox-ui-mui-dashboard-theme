import {createTheme} from "@mui/material";
import { themeShadows } from './shadows';
import waveSvg from '../assets/wave-top.svg';

export const AppTheme = createTheme({
  palette: {
    primary: {
      main: '#2f63f8', //"#116af6",
    },
    secondary: {
      main: '#fafaff',
    },
    text: {
      primary: "#0a204f",
      secondary: "#4c5e86",
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
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: '5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '2.125rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
    }
  },
  shadows: themeShadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: '100%',
        },
        body: {
          minHeight: '100%',
          backgroundColor: '#f2f4f8',
          backgroundImage: `url(${waveSvg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundSize: '100%',
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
          borderRight: '0',
          backgroundColor: '#fbfbff',
          boxShadow: themeShadows[15],
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

