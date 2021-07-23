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
  dark,
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
            dark={dark}
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
            dark={dark}
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
            dark={dark}
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
            dark={dark}
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
            dark={dark}
          ></Update>
        )}
      ></Route>
      <Route
        path="/detail"
        exact
        render={({ location }) => (
          <Detail location={location} cards={cards} dark={dark}></Detail>
        )}
      ></Route>
      <Route path="*" render={() => <NotPage dark={dark}></NotPage>}></Route>
    </Switch>
  )
}

export default Router
