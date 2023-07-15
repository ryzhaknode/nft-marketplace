import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ overflow: "hidden" }}>
        <Header />
        <Container style={{ maxWidth: "1400px" }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
