import { createTheme } from '@mui/material';
import { themeShadows } from './shadows';
import { amber, blueGrey, common, grey, lightBlue, lightGreen, pink, red } from '@mui/material/colors';

const background = common['black'];
const bodyBackground = common['black'];

export const ShadTheme = (mode: 'light' | 'dark') => {
  const isDarkMode = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDarkMode ? common['white'] : common['black'],
      },
      secondary: {
        main: isDarkMode ? common['white'] : common['black'],
      },
      success: {
        main: lightGreen['A700'],
      },
      error: {
        main: red['A400'],
      },
      info: {
        main: lightBlue['A400']
      },
      warning: {
        main: amber['A700'],
      },
      divider: isDarkMode ? blueGrey[800] : blueGrey[100],
      background: {
        default: isDarkMode ? background : grey[50],
        paper: isDarkMode ? background : grey[50],
      }
    },
    shape: {
      borderRadius: 4
    },
    spacing: 8,
    typography: {
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
      }
    },
    shadows: themeShadows,
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
            backgroundColor: isDarkMode ? bodyBackground : '#fafafa',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right',
            backgroundSize: '100%',
          }
        }
      },
      MuiListItemButton: {
        defaultProps: {
          disableRipple: true,
        }
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
          contained: {
            // boxShadow: '5px 3px 0px 0 rgba(16, 141, 255, 0.1)',
            // boxShadow: '2px 5px 10px 2px rgba(16, 141, 255, 0.2)'
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
            backgroundColor: isDarkMode ? background : grey[50],
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          }
        }
      }
    },
  });
};
