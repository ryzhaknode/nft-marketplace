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
  palette: {
    error: {
      main: "rgba(251,42,26,0.95)",
    },
    warning: {
      main: "rgba(255,152,0,0.93)",
    },
  },
});
