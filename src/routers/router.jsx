import { Redirect, Route, Switch } from 'react-router-dom'

import NotPage from '../components/errors/not-page'
import HomePage from '../components/home/home-page'
import Search from '../components/search/search'
import Maker from '../components/maker/maker'

const Router = ({
  FileInput,
  searchIsOpen,
  onSearchOpen,
  cards,
  dropDown,
  userId,
  createCard,
  updateCard,
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage></HomePage>
      </Route>
      <Route path="/search">
        <Search
          onSearchOpen={onSearchOpen}
          dropDown={dropDown}
          searchIsOpen={searchIsOpen}
          cards={cards}
        ></Search>
      </Route>
      <Route path="/maker">
        <Maker
          FileInput={FileInput}
          dropDown={dropDown}
          cards={cards}
          userId={userId}
          createCard={createCard}
          updateCard={updateCard}
        ></Maker>
      </Route>
      <Route path="/update"></Route>
      <Route path="*">
        <NotPage></NotPage>
      </Route>
    </Switch>
  )
}

export default Router
