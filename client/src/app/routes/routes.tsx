import AddCard from "../../pages/AddCardPage/AddCardPage";
import Gallery from "../../pages/GalleryPage/GalleryPage";
import LogIn from "../../pages/LoginPage/LoginPage";
import Profile from "../../pages/ProfilePage/ProfilePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import Statistic from "../../pages/StatisticPage/StatisticPage";
import CardPage from "../../pages/CardPage/CardPage";
import { ROUTES } from "./routesName";

export const publicRoutes = [
  {
    path: ROUTES.mainPage,
    Component: Gallery,
  },
  {
    path: ROUTES.contactId,
    Component: CardPage,
  },
];

export const notAuthRoutes = [
  {
    path: ROUTES.logIn,
    Component: LogIn,
  },
  {
    path: ROUTES.registerUser,
    Component: RegisterPage,
  },
];

export const authRoutes = [
  {
    path: ROUTES.profilePage,
    Component: Profile,
  },
  {
    path: ROUTES.statisticPage,
    Component: Statistic,
  },
  {
    path: ROUTES.addCard,
    Component: AddCard,
  },
];
