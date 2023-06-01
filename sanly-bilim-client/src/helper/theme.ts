import styles from "./style.helper";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    body1: styles.body1,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#513AB1",
      dark: "#38287b",
      light: "#7361c0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1769E4",
      dark: "#10499f",
      light: "#4587e9",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FBFBFB",
    },
    grey: {
      "900": "#585858",
      "800": "#757575",
      "100": "#E4E4E4",
    },
  },
});

export { theme };
