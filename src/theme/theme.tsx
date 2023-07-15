import { createTheme } from "@mui/material";

declare module "@mui/system" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    desktop: true;
    laptop: true;
    tablet: true;
    mobile: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      desktop: 1280,
      laptop: 1024,
      tablet: 640,
      mobile: 0,
    },
  },
  // palette: {
  //   error: {
  //     main: "#ffffff",
  //   },
  // },
});
