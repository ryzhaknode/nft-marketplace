import { createBrowserRouter } from "react-router-dom";
import Profile from "../Pages/ProfilePage";
import Statistic from "../Pages/StatisticPage";
import App from "../App";
import Gallery from "../Pages/GalleryPage";
import ErrorPage from "../Pages/ErrorPage";
import CardPage from "../Pages/CardPage";
import { ROUTES } from "./routesName";
import AddCard from "../Pages/AddCardPage";
import RegisterPage from "../Pages/RegisterPage";
import LogIn from "../Pages/LoginPage";

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
