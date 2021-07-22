import { Redirect, Route, Switch } from 'react-router-dom'

import NotPage from '../components/errors/not-page'
import HomePage from '../components/home/home-page'
import Search from '../components/search/search'
import Maker from '../components/form/maker/maker'
import Update from '../components/form/update/update'
import Detail from '../components/search/detail/detail'
import Work from '../components/work/work'

const Router = ({
  FileInput,
  dropDown,
  userId,
  cards,
  works,
  isCard,
  userCard,
  onMenuChange,
  createCard,
  updateCard,
  deleteCard,
  createWork,
  updateWork,
  deleteWork,
}) => {
  return (
    <Switch>
      <Route path="/" exact>
        {isCard ? <Redirect to="/main" /> : <Redirect to="/maker" />}
      </Route>
      <Route
        path="/main"
        exact
        render={() => (
          <HomePage
            isCard={isCard}
            cards={cards}
            works={works}
            userCard={userCard}
            onMenuChange={onMenuChange}
          ></HomePage>
        )}
      ></Route>
      <Route
        path="/maker"
        exact
        render={() => (
          <Maker
            FileInput={FileInput}
            dropDown={dropDown}
            isCard={isCard}
            createCard={createCard}
            onMenuChange={onMenuChange}
          ></Maker>
        )}
      ></Route>
      <Route
        path="/search"
        exact
        render={() => (
          <Search
            dropDown={dropDown}
            cards={cards}
            onMenuChange={onMenuChange}
          ></Search>
        )}
      ></Route>
      <Route
        path="/work"
        exact
        render={() => (
          <Work
            onMenuChange={onMenuChange}
            userId={userId}
            works={works}
            createWork={createWork}
            updateWork={updateWork}
            deleteWork={deleteWork}
          ></Work>
        )}
      ></Route>
      <Route
        path="/update"
        exact
        render={() => (
          <Update
            FileInput={FileInput}
            userCard={userCard}
            dropDown={dropDown}
            updateCard={updateCard}
            deleteCard={deleteCard}
          ></Update>
        )}
      ></Route>
      <Route
        path="/detail"
        exact
        render={({ location }) => (
          <Detail location={location} cards={cards}></Detail>
        )}
      ></Route>
      <Route component={NotPage}></Route>
    </Switch>
  )
}

export default Router
