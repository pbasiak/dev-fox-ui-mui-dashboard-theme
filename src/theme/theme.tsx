import { createTheme } from '@mui/material';
import { themeShadows } from './shadows';
// import waveSvg from '../assets/wave-top.svg';
import squaresSvg from '../assets/backgrounds/squares.svg';
import { amber, blue, blueGrey, deepOrange, lightGreen } from '@mui/material/colors';

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


export const AppTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue['A700'], //"#2F63F8",
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
      primary: blueGrey[900],
      secondary: blueGrey[700],
    },
    warning: {
      main: amber['A700'],
    },
    divider: blueGrey[100],
    background: {
      default: '#E6E8FF',
    }
  },
  shape: {
    borderRadius: 16
  },
  spacing: 8,
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
          backgroundColor: `${blue['A700']}${convertAlphaToHex(7)}`,
          backgroundImage: `url(${squaresSvg})`,
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
          backgroundColor: '#fbfbff',
          boxShadow: themeShadows[15],
        }
      }
    },
  },
});

const sidebarColors = {
  icon: AppTheme.palette.primary.light,
  iconHover: AppTheme.palette.primary.dark,
  iconActive: AppTheme.palette.primary.main,
  buttonBackgroundHover: `${AppTheme.palette.primary.main}1A`,
  buttonBackgroundActive: `${AppTheme.palette.primary.main}26`,
  buttonText: AppTheme.palette.text.secondary,
  buttonTextActive: AppTheme.palette.primary.main,
  buttonTextHover: AppTheme.palette.primary.dark,
  textColor: blueGrey[500],
}

export const Colors = {
  ...sidebarColors
}

