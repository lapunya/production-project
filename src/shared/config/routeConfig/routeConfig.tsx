import { AboutPage } from 'pages/aboutPage'
import { MainPage } from 'pages/mainPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: routePath.about,
        element: <AboutPage/>
    }
}