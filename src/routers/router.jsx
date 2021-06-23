import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import NotPage from '../components/errors/not-page'
import HomePage from '../components/home/home-page'
import Maker from '../components/maker/maker'
import ResultPage from '../components/search/result-page'
import SearchPage from '../components/search/search-page'

const Router = ({
  FileInput,
  searchIsOpen,
  onSearchOpen,
  cards,
  dropDown,
  cardRepository,
  createCard,
  updateCard
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/maker" />
      </Route>
      <Route path="/home">
        <HomePage></HomePage>
      </Route>
      <Route path="/search">
        <>
          <SearchPage
            onSearchOpen={onSearchOpen}
            searchIsOpen={searchIsOpen}
            dropDown={dropDown}
          ></SearchPage>
          <ResultPage searchIsOpen={searchIsOpen} cards={cards}></ResultPage>
        </>
      </Route>
      <Route path="/maker">
        <Maker
          FileInput={FileInput}
          dropDown={dropDown}
          cards={cards}
          createCard={createCard}
          updateCard={updateCard}
        ></Maker>
      </Route>
      <Route path="*">
        <NotPage></NotPage>
      </Route>
    </Switch>
  )
}

export default Router
