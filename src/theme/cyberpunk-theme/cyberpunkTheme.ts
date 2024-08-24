import { alpha, createTheme } from '@mui/material';
import { common } from '@mui/material/colors';
import { shadThemeShadows } from './shadows.ts';

const bodyBackground =
  'radial-gradient(ellipse at 50% 0%, #331013, transparent 70%), radial-gradient(ellipse at 50% 50%, #060a11, transparent)';

const sidebarBackground =
  'radial-gradient(ellipse at 0 50%, #371a20, transparent 70%), radial-gradient(ellipse at 40% 50%, #141418, transparent)';

const accent = '#fff002';
const borderColor = '#4f1b1d';

export const cyberpunkTheme = () => {
  const isDarkMode = true;

  return createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#f7544b',
        contrastText: '#000000',
      },
      secondary: {
        main: '#5bf4f8',
      },
      success: {
        main: '#05cd9f',
      },
      error: {
        main: '#ff3c33',
      },
      info: {
        main: '#4abec4',
      },
      warning: {
        main: '#cfed58',
      },
      divider: '#3a1418',
      background: {
        default: alpha('#060f15', 0.85),
        paper: alpha('#160d15', 0.85),
      },
      text: {
        primary: '#f5544d',
        secondary: '#f5544d',
      },
    },
    shape: {
      borderRadius: 0,
    },
    spacing: 8,
    typography: {
      fontSize: 16,
      fontFamily: [
        'Rajdhani',
        '-apple-system',
        'BlinkMacSystemFont',
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
            background: bodyBackground,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right',
            backgroundSize: '100%',
            scrollbarColor: `${borderColor} ${alpha(borderColor, 0.4)}`,
            scrollbarWidth: 'thin',
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

            '& .MuiSvgIcon-root': {
              color: borderColor,
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: borderColor,
            },
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
            borderBottom: `1px solid #ff5d55`,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: sidebarBackground,
            borderRight: `1px solid #451819`,
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
          },
        },
      },
      FoxUiLogo: {
        styleOverrides: {
          text: {
            color: accent,
          },
          img: {
            filter: 'invert(94%) sepia(100%) saturate(520%) hue-rotate(350deg) brightness(105%)',
          },
        },
      },
      FoxUiNavigationItem: {
        styleOverrides: {
          button: ({ active }) => ({
            textTransform: 'uppercase',
            border: '2px solid transparent',
            color: '#f7544b',

            '.MuiSvgIcon-root': {
              color: '#f7544b',
            },

            ...(active
              ? {
                  backgroundColor: 'transparent !important',
                  border: '2px solid #5bf4f8',
                  borderLeftWidth: '1px',
                  borderRightWidth: '1px',
                  color: '#5bf4f8',

                  '.MuiSvgIcon-root': {
                    color: '#5bf4f8',
                  },

                  '&:hover': {
                    color: '#5bf4f8',

                    '.MuiSvgIcon-root': {
                      color: '#5bf4f8',
                    },
                  },
                }
              : {}),
          }),
        },
      },
    },
  });
};
