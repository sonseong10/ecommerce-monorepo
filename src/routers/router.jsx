import { Redirect, Route, Switch } from 'react-router-dom'

import NotPage from '../components/errors/not-page'
import HomePage from '../components/home/home-page'
import Search from '../components/search/search'
import Maker from '../components/maker/maker'
import Update from '../components/update/update'

const Router = ({
  FileInput,
  cards,
  dropDown,
  userCard,
  isCard,
  createCard,
  updateCard,
  deleteCard,
}) => {
  return (
    <Switch>
      <Route path="/" exact>
        {isCard ? <Redirect to="/maker" /> : <Redirect to="/main" />}
      </Route>
      <Route path="/main">
        {isCard && <Redirect to="/maker" />}
        <HomePage></HomePage>
      </Route>
      <Route path="/maker">
        {!isCard && <Redirect to="/main" />}
        <Maker
          FileInput={FileInput}
          dropDown={dropDown}
          createCard={createCard}
        ></Maker>
      </Route>
      <Route path="/search">
        <Search dropDown={dropDown} cards={cards}></Search>
      </Route>
      <Route path="/update">
        <Update
          FileInput={FileInput}
          userCard={userCard}
          dropDown={dropDown}
          updateCard={updateCard}
          deleteCard={deleteCard}
        ></Update>
      </Route>
      <Route path="*">
        <NotPage></NotPage>
      </Route>
    </Switch>
  )
}

export default Router
