import { createBrowserRouter } from "react-router-dom";
import Profile from "../RoutePages/Profile";
import Statistic from "../RoutePages/Statistic";
import App from "../App";
import Gallery from "../RoutePages/Gallery";
import ErrorPage from "../RoutePages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Gallery />,
        index: true,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
    ],
  },
]);
