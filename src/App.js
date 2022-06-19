import React, { useEffect, useState } from 'react'
// import { ApolloProvider } from '@apollo/react-hooks'
// import { persistCache } from 'apollo-cache-persist'
import { ThemeProvider } from 'styled-components'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
// import client, { cache } from './client'
import theme from './theme'
import AppRouter from './routes/AppRouter'
import history from './history'

const App = () => {
  // const [apolloClient, setApolloClient] = useState(undefined)

  // useEffect(() => {
  //   persistCache({
  //     cache,
  //     storage: window.localStorage,
  //   }).then(() => {
  //     setApolloClient(client)
  //   })
  //   return () => {}
  // }, [])

  // if (apolloClient === undefined) return null

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
          <AppRouter />
      </ThemeProvider>
    </Router>
  )
}

export default App
