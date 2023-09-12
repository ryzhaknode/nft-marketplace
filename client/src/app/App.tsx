import Header from "../pages/Header/Header";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { check } from "../shared/http/userAPI";
import { useDispatch } from "react-redux";
import Loading from "../pages/LoadingPage/LoadingPage";
import { setUserId } from "./store/slice/userIdSlice";
import { authenticationTrue } from "./store/slice/authenticatedSlice";
import {classNames} from "../shared/classNames/classNames";

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
        <Box className={classNames('app')} >
          <Header />
          <Container className={classNames('app__container')}>
            <Navigation />
          </Container>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
