import { Route, Routes, useNavigate } from 'react-router-dom'

import NotPage from '../components/errors/not-page'
import HomePage from '../pages/home/home-page'
import Search from '../pages/search/search'
import Maker from '../components/form/maker/maker'
import Update from '../components/form/update/update'
import Detail from '../pages/search/detail/detail'
import Work from '../pages/work/work'
import React, { useEffect } from 'react'
import type ImageUploader from 'service/image-uploader'
import type DropDown from 'utils/dropdown'

interface IRedirectProps {
  router: string
}
const Redirect = ({ router }: IRedirectProps) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(router)
  }, [navigate, router])
  return <React.Fragment></React.Fragment>
}

interface IRouterProps {
  FileInput: React.MemoExoticComponent<
    (props: {
      imageUploader?: ImageUploader
      name: string
      onFileChange?: (obj: { name?: string; url?: string }) => void
    }) => React.JSX.Element
  >
  dropDown: DropDown
  userId: string
  cards:
    | {
        [key: string]: {
          email: string
          fileName: string
          fileURL: string
          login: boolean
          msg: string
          name: string
          phone: string
          rank: string
          team: string
          telephone: string
          theme: string
        }
      }
    | undefined
  works:
    | {
        [key: string]: {
          contents: string
          time: number
          title: string
        }
      }
    | undefined
  isCard: number
  userCard?: {
    email: string
    fileName: string
    fileURL: string
    login: boolean
    msg: string
    name: string
    phone: string
    rank: string
    team: string
    telephone: string
    theme: string
  }
  onMenuChange: (v: 'search' | 'work' | 'home') => void
  createCard: (card: {
    email: string
    fileName: string
    fileURL: string
    login: boolean
    msg: string
    name: string
    phone: string
    rank: string
    team: string
    telephone: string
    theme: string
  }) => void
  updateCard: (card: {
    email: string
    fileName: string
    fileURL: string
    login: boolean
    msg: string
    name: string
    phone: string
    rank: string
    team: string
    telephone: string
    theme: string
  }) => void
  deleteCard: () => void
  createWork: (work: { contents: string; time: number; title: string }) => void
  updateWork: (work: { contents: string; time: number; title: string }) => void
  deleteWork: (work: { contents: string; time: number; title: string }) => void
  dark: boolean
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
}: IRouterProps) => {
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
