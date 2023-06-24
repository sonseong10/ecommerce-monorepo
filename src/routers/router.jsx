import { Route, Routes, useNavigate } from 'react-router-dom'

import NotPage from '../components/errors/not-page'
import HomePage from '../components/home/home-page'
import Search from '../components/search/search'
import Maker from '../components/form/maker/maker'
import Update from '../components/form/update/update'
import Detail from '../components/search/detail/detail'
import Work from '../components/work/work'
import React, { useEffect } from 'react'

const Redirect = ({ router }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(router)
  }, [navigate, router])
  return <React.Fragment></React.Fragment>
}

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
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <React.Fragment>
              {isCard ? (
                <Redirect router="main"></Redirect>
              ) : (
                <Redirect router="maker"></Redirect>
              )}
            </React.Fragment>
          }
        ></Route>
        <Route
          path="main"
          element={
            <HomePage
              isCard={isCard}
              cards={cards}
              works={works}
              userCard={userCard}
              onMenuChange={onMenuChange}
              dark={dark}
            ></HomePage>
          }
        ></Route>
        <Route
          path="maker"
          element={
            <Maker
              FileInput={FileInput}
              dropDown={dropDown}
              isCard={isCard}
              createCard={createCard}
              onMenuChange={onMenuChange}
              dark={dark}
            ></Maker>
          }
        ></Route>
        <Route
          path="search"
          element={
            <Search
              dropDown={dropDown}
              cards={cards}
              onMenuChange={onMenuChange}
              dark={dark}
            ></Search>
          }
        ></Route>
        <Route
          path="work"
          element={
            <Work
              onMenuChange={onMenuChange}
              userId={userId}
              works={works}
              createWork={createWork}
              updateWork={updateWork}
              deleteWork={deleteWork}
              dark={dark}
            ></Work>
          }
        ></Route>
        <Route
          path="update"
          element={
            <Update
              FileInput={FileInput}
              userCard={userCard}
              dropDown={dropDown}
              updateCard={updateCard}
              deleteCard={deleteCard}
              dark={dark}
            ></Update>
          }
        ></Route>
        <Route
          path="detail"
          element={<Detail cards={cards} dark={dark}></Detail>}
        ></Route>
        <Route path="*" element={<NotPage dark={dark}></NotPage>}></Route>
      </Route>
    </Routes>
  )
}

export default Router
