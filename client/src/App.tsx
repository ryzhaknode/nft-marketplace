import Header from "./components/Header";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Navigation from "./Pages/Navigation";
import { useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { useDispatch } from "react-redux";
import Loading from "./Pages/LoadingPage";
import { setUserId } from "./store/slice/userIdSlice";
import { authenticationTrue } from "./store/slice/authenticatedSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    check()
      .then((response: any) => {
        dispatch(authenticationTrue());
        dispatch(setUserId(response.id));
      })
      .catch((error) => console.log(error.response.data.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Loading />
      ) : (
        <Box sx={{ overflow: "hidden" }}>
          <Header />
          <Container style={{ maxWidth: "1400px" }}>
            <Navigation />
          </Container>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
