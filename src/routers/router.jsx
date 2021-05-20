import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotLogin from '../components/errors/not-login'
import NotPage from '../components/errors/not-page'
import HomePage from '../components/home/home-page'
import ResultPage from '../components/search/result-page'
import SearchPage from '../components/search/search-page'

const Router = ({ authService }) => {
  return (
    <Switch>
      <Route exact path="/">
        <NotLogin></NotLogin>
      </Route>
      <Route path="/home">
        <HomePage authService={authService}></HomePage>
      </Route>
      <Route path="/search">
        <SearchPage></SearchPage>
        <ResultPage></ResultPage>
      </Route>
      <Route path="*">
        <NotPage></NotPage>
      </Route>
    </Switch>
  )
}

export default Router
