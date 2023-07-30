import { createBrowserRouter } from "react-router-dom";
import Profile from "../RoutePages/Profile";
import Statistic from "../RoutePages/Statistic";
import App from "../App";
import Gallery from "../RoutePages/Gallery";
import ErrorPage from "../RoutePages/ErrorPage";
import CardPage from "../RoutePages/CardPage";
import { ROUTES } from "./routesName";
import AddCard from "../RoutePages/AddCard";
import RegisterPage from "../RoutePages/Register";
import LogIn from "../RoutePages/LogIn";

export const router = createBrowserRouter([
  {
    path: ROUTES.mainPage,

    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Gallery />,
      },
      {
        path: ROUTES.contactId,
        element: <CardPage />,
      },
      {
        path: ROUTES.profilePage,
        element: <Profile />,
      },
      {
        path: ROUTES.statisticPage,
        element: <Statistic />,
      },
      {
        path: ROUTES.addCard,
        element: <AddCard />,
      },
      {
        path: ROUTES.registerUser,
        element: <RegisterPage />,
      },
      {
        path: ROUTES.logIn,
        element: <LogIn />,
      },
    ],
  },
]);
