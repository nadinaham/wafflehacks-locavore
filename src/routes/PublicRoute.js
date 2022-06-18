import React from 'react'
import { Route } from 'react-router-dom'

const PublicRoute = ({ children, error, ...rest }) => {
  const { isSignedIn } = false
  return (
    <Route {...rest}>
      {!isSignedIn ? (
        <>
          {children}
        </>
      ) : (
        <>
          {children}
        </>
      )}
    </Route>
  )
}

export default PublicRoute
