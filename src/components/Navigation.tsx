import { Routes, Route } from "react-router-dom";
import { selectAuthenticated } from "../store/slice/authenticatedSlice";
import { useSelector } from "react-redux";
import Gallery from "../RoutePages/Gallery";
import CardPage from "../RoutePages/CardPage";
import Profile from "../RoutePages/Profile";
import { ROUTES } from "../Routes/routesName";
import Statistic from "../RoutePages/Statistic";
import LogIn from "../RoutePages/LogIn";
import RegisterPage from "../RoutePages/Register";
import AddCard from "../RoutePages/AddCard";

const Navigation = () => {
  const authentication = useSelector(selectAuthenticated);

  return (
    <Routes>
      <Route index element={<Gallery />} />
      <Route path={ROUTES.contactId} element={<CardPage />} />
      {authentication ? (
        <>
          <Route path={ROUTES.profilePage} element={<Profile />} />
          <Route path={ROUTES.statisticPage} element={<Statistic />} />
          <Route path={ROUTES.addCard} element={<AddCard />} />
        </>
      ) : (
        <>
          <Route path={ROUTES.logIn} element={<LogIn />} />
          <Route path={ROUTES.registerUser} element={<RegisterPage />} />
        </>
      )}
    </Routes>
  );
};

export default Navigation;
