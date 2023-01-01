import {createTheme} from "@mui/material";

const Colors = {
  primary: "#2962ff",
  secondary: "#ff5252",
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
  },
});
