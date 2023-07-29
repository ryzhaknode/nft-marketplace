import Header from "./components/Header";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Navigation from "./components/Navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ overflow: "hidden" }}>
        <Header />
        <Container style={{ maxWidth: "1400px" }}>
          <Navigation />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
