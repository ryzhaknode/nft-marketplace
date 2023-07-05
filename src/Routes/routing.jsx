import { createBrowserRouter } from "react-router-dom";
import Profile from "../RoutePages/Profile";
import Statistic from "../RoutePages/Statistic";
import App from "../App";
import Gallery from "../RoutePages/Gallery";
import ErrorPage from "../RoutePages/ErrorPage";
import CardPage from "../RoutePages/CardPage";

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
  {
    path: "/card-artcrush",
    element: <CardPage />,
  },
  {
    path: "/card-geometric",
    element: <CardPage />,
  },
  {
    path: "/card-beanz",
    element: <CardPage />,
  },
  {
    path: "/card-morphaper",
    element: <CardPage />,
  },
  {
    path: "/card-otherdeed",
    element: <CardPage />,
  },
  {
    path: "/card-degods",
    element: <CardPage />,
  },
]);
