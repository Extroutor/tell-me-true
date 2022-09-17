import {MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, UNIVERSE_ROUTE} from './utils/consts'
import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main";
import UniversePage from "./pages/UniversePage/UniversePage";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: UNIVERSE_ROUTE + '/:id',
        Component: UniversePage
    },

]

export const authRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: UNIVERSE_ROUTE + '/:id',
        Component: UniversePage
    },
]