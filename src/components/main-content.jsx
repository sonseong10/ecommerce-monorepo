import React from 'react'

import Router from '../routers/router'
import NotLogin from './errors/not-login'
import SideNavigation from './side-navigation'

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
}) => {
  return (
    <div className="main-content">
      <div className="container">
        <div className="row">
          <SideNavigation
            userId={userId}
            onLogout={onLogout}
            userCard={userCard}
            isCard={Object.keys(userCard).length}
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
              isCard={Object.keys(userCard).length}
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
