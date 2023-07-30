import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/routing";
import Loading from "./RoutePages/Loading";
import { Provider } from "react-redux";
import store from "./store/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </Provider>
  </React.StrictMode>
);
