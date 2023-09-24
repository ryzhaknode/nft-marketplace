import { RouteProps } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage';
import StatisticPage from '../../pages/StatisticPage/StatisticPage';
import AddCardPage from '../../pages/AddCardPage/ui/AddCardPage';
import ProfilePage from '../../pages/ProfilePage/ui/ProfilePage';
import GalleryPage from '../../pages/GalleryPage/ui/GalleryPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';

export const ROUTES = {
    mainPage: '/',
    cardPage: (id: any) => `gallery/${id}`,
    profilePage: '/profile',
    statisticPage: '/profile',
    contactId: 'gallery/:contactId',
    addCard: '/add',
    registerUser: '/register',
    logIn: '/login',
};

// export enum AppRoutes {
//     MAIN = 'mainPage',
//     // CARD = 'cardPage',
//     PROFILE = 'profilePage',
//     STATISTIC = 'profilePage',
//     // CONTACT_ID = 'contactId',
//     ADD_CARD = 'addCard',
//     REGISTER = 'addCard',
//     LOGIN = 'logIn',
// }
//
// export const RoutePath: Record<AppRoutes, string> = {
//     [AppRoutes.MAIN]: '/',
//     // [AppRoutes.CARD]: `${(id: any) => `gallery /${id}``,
//     [AppRoutes.PROFILE]: '/profile',
//     [AppRoutes.STATISTIC]: '/statistic',
//     // [AppRoutes.CONTACT_ID]: 'gallery/:contactId',
//     [AppRoutes.ADD_CARD]: '/add',
//     [AppRoutes.REGISTER]: '/register',
//     [AppRoutes.LOGIN]: '/login',
// };
//
// // eslint-disable-next-line
// export const routeConfig: Record<AppRoutes, RouteProps> = {
//     [AppRoutes.MAIN]: {
//         path: RoutePath.mainPage,
//         element: <GalleryPage />,
//     },
//     // [AppRoutes.CARD]: `${(id: any) => `gallery /${id}``,
//     [AppRoutes.PROFILE]: {
//         path: RoutePath.profilePage,
//         element: <ProfilePage />,
//     },
//     //
//     [AppRoutes.STATISTIC]: {
//         path: RoutePath.profilePage,
//         element: <StatisticPage />,
//     },
//     // [AppRoutes.CONTACT_ID]: {
//     //     path: RoutePath.profilePage,
//     //     element: <ProfilePage / >
//     // // },
//     [AppRoutes.ADD_CARD]: {
//         path: RoutePath.profilePage,
//         element: <AddCardPage />,
//     },
//     [AppRoutes.REGISTER]: {
//         path: RoutePath.profilePage,
//         element: <RegisterPage />,
//     },
//     [AppRoutes.LOGIN]: {
//         path: RoutePath.profilePage,
//         element: <LoginPage />,
//     },
// };
