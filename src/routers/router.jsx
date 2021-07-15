import { Redirect, Route, Switch } from 'react-router-dom'

import NotPage from '../components/errors/not-page'
import HomePage from '../components/home/home-page'
import Search from '../components/search/search'
import Maker from '../components/maker/maker'
import Update from '../components/update/update'
import Detail from '../components/detail/detail'
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
        render={() => (
          <Maker
            FileInput={FileInput}
            dropDown={dropDown}
            createCard={createCard}
            onMenuChange={onMenuChange}
          ></Maker>
        )}
      ></Route>
      <Route
        path="/search"
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
        render={({ location }) => (
          <Detail location={location} cards={cards}></Detail>
        )}
      ></Route>
      <Route path="*" component={NotPage}></Route>
    </Switch>
  )
}

export default Router
