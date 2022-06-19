import PublicRoute from './PublicRoute'
// import PrivateRoute from './PrivateRoute'

import { ROUTE_PATHS } from '../utils/constants'
import Home from '../containers/Home'
import Landing from '../containers/Landing'
import UserLogin from '../components/UserLogin'
import UserRegistration from '../components/UserRegistration'

export const routes = {
  home: {
    path: ROUTE_PATHS.HOME,
    routeComponent: PublicRoute,
    component: Home,
    exact: true,
  },
  landing: {
    path: ROUTE_PATHS.LANDING,
    routeComponent: PublicRoute,
    component: Landing,
    exact: true,
  },
  login: {
    path: ROUTE_PATHS.LOGIN,
    routeComponent: PublicRoute,
    component: UserLogin,
    exact: true,
  },
  signup: {
    path: ROUTE_PATHS.SIGNUP,
    routeComponent: PublicRoute,
    component: UserRegistration,
    exact: true,
  },
}

export const renderRoutes = Object.entries(routes)
