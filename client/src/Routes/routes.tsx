import AddCard from "../Pages/AddCardPage";
import Gallery from "../Pages/GalleryPage";
import LogIn from "../Pages/LoginPage";
import Profile from "../Pages/ProfilePage";
import RegisterPage from "../Pages/RegisterPage";
import Statistic from "../Pages/StatisticPage";
import CardPage from "../Pages/CardPage";
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
