import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ overflow: "hidden" }}>
        <Header />
        <Container style={{ maxWidth: "1400px" }}>
          <Provider store={store}>
            <Outlet />
          </Provider>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
