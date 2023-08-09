import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./style/index.scss";
import { router } from "./Routes/routing";
import Loading from "./Pages/LoadingPage";
import { Provider } from "react-redux";
import store from "./store/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
console.log(process.env.REACT_APP_API_URL);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </Provider>
  </React.StrictMode>
);
