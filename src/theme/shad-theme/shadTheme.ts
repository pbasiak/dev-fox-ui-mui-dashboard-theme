import { createTheme } from '@mui/material';
import { amber, common, green, grey, lightBlue, red } from '@mui/material/colors';
import { shadThemeShadows } from './shadows.ts';

const background = common['black'];
const bodyBackground = common['black'];

export const shadTheme = (mode: 'light' | 'dark') => {
  const isDarkMode = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        dark: isDarkMode ? grey['200'] : common['black'],
        main: isDarkMode ? common['white'] : grey['900'],
        light: isDarkMode ? grey['800'] : grey['100'],
      },
      secondary: {
        main: isDarkMode ? grey['100'] : grey['800'],
      },
      success: {
        main: green['900'],
      },
      error: {
        main: red['900'],
      },
      info: {
        main: lightBlue['900'],
      },
      warning: {
        main: amber['900'],
      },
      divider: isDarkMode ? grey[800] : grey[300],
      background: {
        default: isDarkMode ? background : grey[50],
        paper: isDarkMode ? background : grey[50],
      },
    },
    shape: {
      borderRadius: 4,
    },
    spacing: 8,
    typography: {
      fontSize: 14,
      htmlFontSize: 18,
      fontFamily: [
        'Noto Sans',
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
        fontSize: '3.75rem',
        fontWeight: 600,
      },
      h2: {
        fontSize: '3rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '2.125rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
      },
    },
    shadows: shadThemeShadows,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            colorScheme: isDarkMode ? 'dark' : 'light',
          },
          html: {
            minHeight: '100%',
          },
          body: {
            minHeight: '100%',
            backgroundColor: isDarkMode ? bodyBackground : '#fbfbfb',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right',
            backgroundSize: '100%',
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiListItemButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? common['black'] : common['white'],
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            boxShadow: 'none',
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
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: 0,
            borderBottom: `1px solid ${isDarkMode ? grey[800] : grey[300]}`,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDarkMode ? background : common['white'],
            border: `1px solid ${isDarkMode ? grey[800] : grey[300]}`,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: isDarkMode ? '#090909' : common['white'],
            border: `1px solid ${isDarkMode ? grey[800] : grey[300]}`,
          },
        },
      },
    },
  });
};
