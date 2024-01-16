import { createTheme } from '@mui/material';
import { themeShadows } from './shadows';
// import waveSvg from '../assets/wave-top.svg';
import squaresSvg from '../assets/backgrounds/squares.svg?url';
import squaresDarkSvg from '../assets/backgrounds/squares-dark.svg?inline';
import { amber, blue, blueGrey, deepOrange, grey, lightGreen } from '@mui/material/colors';

// Color transparency: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4

function convertAlphaToHex(alphaDecimal: number) {
  // Convert alphaDecimal to a value between 0 and 1
  const alpha = alphaDecimal / 100;

  // Calculate the equivalent alpha value in the range of 0 to 255
  const alphaInt = Math.round(alpha * 255);

  // Convert alphaInt to hexadecimal string
  const alphaHex = alphaInt.toString(16).toUpperCase();

  // Pad the hexadecimal value with leading zero if needed
  return alphaHex.padStart(2, '0');
}


const background = '#171a1f';
const bodyBackground = '#111111';


export const AppTheme = (mode: 'light' | 'dark') => {
  const isDarkMode = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDarkMode ? blue['A400'] : blue['A700'], //"#2F63F8",
      },
      secondary: {
        main: amber['A700'],
      },
      success: {
        main: lightGreen['A700'],
      },
      error: {
        main: deepOrange['A700'],
      },
      info: {
        main: blue[50]
      },
      text: {
        primary: isDarkMode ? blueGrey[100] : blueGrey[900],
        secondary: isDarkMode ? blueGrey[200] : blueGrey[700],
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
      borderRadius: 16
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
          ':root': {
            colorScheme: isDarkMode ? 'dark' : 'light',
          },
          html: {
            minHeight: '100%',
          },
          body: {
            minHeight: '100%',
            backgroundColor: isDarkMode ? bodyBackground : `${blue['A700']}${convertAlphaToHex(7)}`,
            backgroundImage: `url(${isDarkMode ? squaresDarkSvg : squaresSvg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right',
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
            borderRight: '0',
            backgroundColor: isDarkMode ? background : grey[50],
            boxShadow: themeShadows[15],
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
