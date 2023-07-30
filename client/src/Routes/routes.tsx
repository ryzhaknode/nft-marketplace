import AddCard from "../RoutePages/AddCard";
import Gallery from "../RoutePages/Gallery";
import LogIn from "../RoutePages/LogIn";
import Profile from "../RoutePages/Profile";
import RegisterPage from "../RoutePages/Register";
import Statistic from "../RoutePages/Statistic";
import CardPage from "../RoutePages/CardPage";
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
