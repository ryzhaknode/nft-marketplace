import { Routes, Route } from "react-router-dom";
import { selectAuthenticated } from "../../../store/slice/authenticatedSlice";
import { useSelector } from "react-redux";
import { authRoutes, notAuthRoutes, publicRoutes } from "../../routes";

const AppRoutes = () => {
  const authentication = useSelector(selectAuthenticated);

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {authentication ? (
        <>
          {authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </>
      ) : (
        <>
          {notAuthRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
