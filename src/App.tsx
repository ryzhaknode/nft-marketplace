import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ overflow: "hidden" }}>
        <Header />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
