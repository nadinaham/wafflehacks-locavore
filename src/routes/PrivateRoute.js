import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ROUTE_PATHS } from '../utils/constants'

const PrivateRoute = ({
  children, ...rest
}) => {
  const { isSignedIn } = false

  return (
    <Route {...rest}>
      {isSignedIn ? (
        <>
          {children}
        </>
      ) : (
        <Redirect
          to={{
            pathname: ROUTE_PATHS.LOGIN,
          }}
        />
      )}
    </Route>
  )
}

export default PrivateRoute
