import React from 'react'

import Router from '../routers/router'
import NotLogin from './errors/not-login'
import SideNavigation from './side-navigation'
import type DropDown from 'utils/dropdown'
import type ImageUploader from 'service/image-uploader'

interface IMainContentProps {
  FileInput: React.MemoExoticComponent<
    (props: {
      imageUploader?: ImageUploader
      name: string
      onFileChange?: (obj: { name?: string; url?: string }) => void
    }) => React.JSX.Element
  >
  dropDown: DropDown
  userId: string
  onLogout: () => void
  deleteAccount: () => void
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
  createOrUpdateCard: (card: {
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
  createOrUpdateWork: (work: {
    contents: string
    time: number
    title: string
  }) => void
  deleteWork: (work: { contents: string; time: number; title: string }) => void
  loding: boolean
  menuActive: 'home' | 'search' | 'work'
  onMenuChange: (v: 'search' | 'work' | 'home') => void
  ToggleOverlay: () => void
  handleModeChange: () => void
  dark: boolean
}
const MainContent = ({
  FileInput,
  dropDown,
  userId,
  onLogout,
  deleteAccount,
  cards,
  works,
  userCard,
  createOrUpdateCard,
  createOrUpdateWork,
  deleteWork,
  loding,
  menuActive,
  onMenuChange,
  ToggleOverlay,
  handleModeChange,
  dark,
}: IMainContentProps) => {
  return (
    <div className="main-content">
      <div className="container">
        <div className="row">
          <SideNavigation
            userId={userId}
            onLogout={onLogout}
            userCard={userCard}
            isCard={userCard ? Object.keys(userCard).length : 0}
            ToggleOverlay={ToggleOverlay}
            menuActive={menuActive}
            loding={loding}
            handleModeChange={handleModeChange}
            dark={dark}
          ></SideNavigation>
          {!userId ? (
            <NotLogin loding={loding} dark={dark} />
          ) : (
            <Router
              FileInput={FileInput}
              dropDown={dropDown}
              userId={userId}
              cards={cards}
              works={works}
              userCard={userCard}
              isCard={userCard ? Object.keys(userCard).length : 0}
              createCard={createOrUpdateCard}
              updateCard={createOrUpdateCard}
              deleteCard={deleteAccount}
              createWork={createOrUpdateWork}
              updateWork={createOrUpdateWork}
              deleteWork={deleteWork}
              onMenuChange={onMenuChange}
              dark={dark}
            ></Router>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainContent
