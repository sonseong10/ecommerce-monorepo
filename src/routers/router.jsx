import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import NotLogin from '../components/errors/not-login'
import NotPage from '../components/errors/not-page'
import HomePage from '../components/home/home-page'
import Maker from '../components/maker/maker'
import ResultPage from '../components/search/result-page'
import SearchPage from '../components/search/search-page'

const Router = ({
  FileInput,
  authService,
  isUser,
  searchIsOpen,
  onSearchOpen,
  cards,
  addCard,
  dropDown,
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        {isUser ? (
          <HomePage authService={authService}></HomePage>
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
              dropDown={dropDown}
            ></SearchPage>
            <ResultPage searchIsOpen={searchIsOpen} cards={cards}></ResultPage>
          </>
        ) : (
          <NotLogin />
        )}
      </Route>
      <Route path="/maker">
        {isUser ? (
          <Maker
            FileInput={FileInput}
            cards={cards}
            onSubmit={addCard}
            dropDown={dropDown}
          ></Maker>
        ) : (
          <NotPage></NotPage>
        )}
      </Route>
      <Route path="*">
        <NotPage></NotPage>
      </Route>
    </Switch>
  )
}

export default Router
