import Header from "../pages/Header/Header";
import {Box, Container} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./theme/theme";
import AppRoutes from "./routes/ui/AppRoutes/AppRoutes";
import {Suspense, useEffect, useState} from "react";
import {check} from "../shared/http/userAPI";
import {useDispatch} from "react-redux";
import Loading from "../pages/LoadingPage/LoadingPage";
import {setUserId} from "./store/slice/userIdSlice";
import {authenticationTrue} from "./store/slice/authenticatedSlice";
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
                <Loading/>
            ) : (
                <Suspense fallback=''>
                    <Box className={classNames('app')}>
                        <Header/>
                        <Container className={classNames('app__container')}>
                            <AppRoutes/>
                        </Container>
                    </Box>
                </Suspense>
            )}
        </ThemeProvider>
    );
}

export default App;
