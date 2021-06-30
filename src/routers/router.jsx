import { Redirect, Route, Switch } from 'react-router-dom'

import NotPage from '../components/errors/not-page'
import HomePage from '../components/home/home-page'
import Search from '../components/search/search'
import Maker from '../components/maker/maker'
import Update from '../components/update/update'

const Router = ({
  FileInput,
  onSearchOpen,
  cards,
  dropDown,
  userCard,
  createCard,
  updateCard,
}) => {
  const check = Object.keys(userCard).length === 0
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/main" />
      </Route>
      <Route path="/main">
        {!check ? (
          <HomePage></HomePage>
        ) : (
          <Maker
            FileInput={FileInput}
            dropDown={dropDown}
            createCard={createCard}
          ></Maker>
        )}
      </Route>
      <Route path="/search">
        <Search
          onSearchOpen={onSearchOpen}
          dropDown={dropDown}
          cards={cards}
        ></Search>
      </Route>
      <Route path="/update">
        <Update
          FileInput={FileInput}
          userCard={userCard}
          dropDown={dropDown}
          updateCard={updateCard}
        ></Update>
      </Route>
      <Route path="*">
        <NotPage></NotPage>
      </Route>
    </Switch>
  )
}

export default Router
