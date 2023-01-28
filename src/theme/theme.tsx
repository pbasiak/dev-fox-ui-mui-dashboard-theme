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
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
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
    }
  },
});
