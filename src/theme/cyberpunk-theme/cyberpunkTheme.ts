import { alpha, createTheme } from '@mui/material';
import { common } from '@mui/material/colors';
import { shadThemeShadows } from './shadows.ts';

const noise =
  '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';
const noiseBackground = `url("data:image/png;base64,${noise}")`;
const bodyBackground = `${noiseBackground}, radial-gradient(ellipse at 50% 0%, #331013, transparent 70%), radial-gradient(ellipse at 50% 50%, #060a11, #060a11)`;

const sidebarBackground = `${noiseBackground}, radial-gradient(ellipse at 0 10%, #5f1f1d, transparent 75%), radial-gradient(ellipse at 0 70%, #5f1f1d, transparent 65%), radial-gradient(ellipse at 0 50%, #5f1f1d, transparent 70%), radial-gradient(ellipse at 80% 50%, #0c090d, #0c090d)`;

const accent = '#fff002';
const borderColor = '#4f1b1d';
const yellowAccent = '#ffcf40';
const divider = '#6a1617';
const primaryMain = '#ff6057';
const secondaryMain = '#25ffff';

export const cyberpunkTheme = () => {
  const isDarkMode = true;

  return createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: primaryMain,
        contrastText: '#000000',
      },
      secondary: {
        main: '#25ffff',
      },
      success: {
        main: '#17d5b2',
      },
      error: {
        main: '#fa2c24',
      },
      info: {
        main: '#4abec4',
      },
      warning: {
        main: '#ffd742',
      },
      divider,
      background: {
        default: alpha('#0d0c15', 0.8),
        paper: alpha('#0d0c15', 0.8),
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
            backgroundRepeat: 'repeat',
            backgroundPosition: 'top right',
            backgroundSize: 'cover cover',
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
            color: secondaryMain,

            '& .MuiSvgIcon-root': {
              color: secondaryMain,
            },

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: borderColor,
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            '&.MuiLink-root': {
              '&:hover': {
                color: yellowAccent,
              },
            },
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            '&:hover': {
              color: yellowAccent,
            },
          },
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
            border: `1px solid ${borderColor}`,
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
            borderLeftWidth: '1px',
            borderRightWidth: '1px',
            color: '#f7544b',

            '.MuiSvgIcon-root': {
              color: '#f7544b',
            },

            '&:hover': {
              backgroundColor: 'transparent !important',
              borderColor: yellowAccent,
              color: yellowAccent,

              '.MuiSvgIcon-root': {
                color: yellowAccent,
              },

              '&:hover': {
                color: yellowAccent,

                '.MuiSvgIcon-root': {
                  color: yellowAccent,
                },
              },
            },

            ...(active
              ? {
                  backgroundColor: 'transparent !important',
                  borderColor: primaryMain,
                  color: primaryMain,

                  '.MuiSvgIcon-root': {
                    color: primaryMain,
                  },

                  '&:hover': {
                    color: primaryMain,

                    '.MuiSvgIcon-root': {
                      color: primaryMain,
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
