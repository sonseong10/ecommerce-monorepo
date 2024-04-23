import React from 'react'
import SideNavigation from './sideNavigation'
import type { ICardVo } from 'types/grobal-type'
import { Outlet } from 'react-router-dom'

interface IMainContentProps {
  userId: string
  onLogout: () => void
  userCard?: ICardVo
  loding: boolean
  menuActive: string
  ToggleOverlay: () => void
  handleModeChange: () => void
  dark: boolean
}

const MainContent = ({
  userId,
  onLogout,
  userCard,
  loding,
  menuActive,
  ToggleOverlay,
  handleModeChange,
  dark,
}: IMainContentProps) => {
  return (
    <>
      {/* <Header /> */}
      <div className="container">
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
        />

        <article className="articleGroup">
          <Outlet />
        </article>
      </div>
    </>
  )
}

export default MainContent
