import React from "react";
import {RouterProvider} from "react-router-dom";
import "./app/style/index.scss";
import {router} from "./app/routes/routing";
import Loading from "./pages/LoadingPage/LoadingPage";
import {Provider} from "react-redux";
import store from "./app/store/store";
import "./shared/config/i18n/i18n";
import {render} from "react-dom";

// const root = ReactDOM.createRoot(
//     document.getElementById("root") as HTMLElement
// );
render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} fallbackElement={<Loading/>}/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
;
