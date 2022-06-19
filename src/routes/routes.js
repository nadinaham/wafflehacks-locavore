import PublicRoute from './PublicRoute'
// import PrivateRoute from './PrivateRoute'

import { ROUTE_PATHS } from '../utils/constants'
import Home from '../containers/Home'
import Landing from '../containers/Landing'
import UserFor from '../containers/UserFor'
import Order from '../containers/Order'

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
  userFor: {
    path: ROUTE_PATHS.USERFOR,
    routeComponent: PublicRoute,
    component: UserFor,
    exact: true,
  },
  order: {
    path: ROUTE_PATHS.ORDER,
    routeComponent: PublicRoute,
    component: Order,
    exact: true,
  },
}

export const renderRoutes = Object.entries(routes)
