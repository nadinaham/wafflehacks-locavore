import PublicRoute from './PublicRoute'
// import PrivateRoute from './PrivateRoute'

import { ROUTE_PATHS } from '../utils/constants'
import Home from '../containers/Home'
import Landing from '../containers/Landing'

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
}

export const renderRoutes = Object.entries(routes)
