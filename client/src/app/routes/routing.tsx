import { createBrowserRouter } from 'react-router-dom';
import Profile from '../../pages/ProfilePage/ui/ProfilePage';
import Statistic from '../../pages/StatisticPage/StatisticPage';
import App from '../App';
import Gallery from '../../pages/GalleryPage/ui/GalleryPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import CardPage from '../../pages/CardPage/CardPage';
import { ROUTES } from './routesConfig';
import AddCard from '../../pages/AddCardPage/ui/AddCardPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import LogIn from '../../pages/LoginPage/LoginPage';

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
