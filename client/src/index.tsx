import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./app/style/index.scss";
import { router } from "./app/routes/routing";
import Loading from "./pages/LoadingPage/LoadingPage";
import { Provider } from "react-redux";
import store from "./app/store/store";
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
