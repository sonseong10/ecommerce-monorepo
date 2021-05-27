import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import NotLogin from '../components/errors/not-login'
import NotPage from '../components/errors/not-page'
import HomePage from '../components/home/home-page'
import ResultPage from '../components/search/result-page'
import SearchPage from '../components/search/search-page'

const Router = ({
  authService,
  isUser,
  handleSearchActive,
  handleHomeActive,
  searchIsOpen,
  onSearchOpen,
  cards,
  teams,
  ranks,
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        {isUser ? (
          <HomePage
            authService={authService}
            handleHomeActive={handleHomeActive}
          ></HomePage>
        ) : (
          <NotLogin />
        )}
      </Route>
      <Route path="/search">
        {isUser ? (
          <>
            <SearchPage
              onSearchOpen={onSearchOpen}
              searchIsOpen={searchIsOpen}
              teams={teams}
              ranks={ranks}
            ></SearchPage>
            <ResultPage
              handleSearchActive={handleSearchActive}
              searchIsOpen={searchIsOpen}
              cards={cards}
            ></ResultPage>
          </>
        ) : (
          <NotLogin />
        )}
      </Route>
      <Route path="*">
        <NotPage></NotPage>
      </Route>
    </Switch>
  )
}

export default Router
