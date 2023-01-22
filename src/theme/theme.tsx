import {createTheme} from "@mui/material";

const Colors = {
  primary: "#2962FF",
  secondary: "#FF5252",
}

export const AppTheme = createTheme({
  palette: {
    primary: {
      main: Colors.primary
    },
    secondary: {
      main: Colors.secondary
    }
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
