import Header from "./components/Header";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { useDispatch } from "react-redux";
import { authenticationTrue } from "./store/slice/authenticatedSlice";
import Loading from "./RoutePages/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    check()
      .then((responce) => {
        dispatch(authenticationTrue());
        console.log(responce);
      })
      .catch((error) => console.log(error.response.data.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
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
