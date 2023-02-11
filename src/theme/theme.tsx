import {createTheme} from "@mui/material";

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
  primary: "#108DFF",
  secondary: "#FF5252",
  baseTextColor: '#0C1722',
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
  },
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
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: 'none',
        },
        contained: {
          boxShadow: '5px 3px 0px 0 rgba(16, 141, 255, 0.1)',
        },
        sizeSmall: {
          padding: '2px 12px',
        },
        sizeMedium: {
          padding: '4px 16px',
        },
        sizeLarge: {
          padding: '6px 22px',
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
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        }
      }
    }
  },
});
