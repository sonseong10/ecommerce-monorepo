import React, { useEffect, useRef } from 'react'
import SideNavigation from './sideNavigation'
import type { ICardVo } from 'types/grobal-type'
import { Outlet } from 'react-router-dom'
import Hader from './Hader'
import { useContentHeight } from 'commons/layers/store/layerHook'

interface IMainContentProps {
  userId: string
  onLogout: () => void
  userCard?: ICardVo
  loding: boolean
  menuActive: string
  onMenuChange: (v: string) => void
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
  onMenuChange,
  dark,
}: IMainContentProps) => {
  const { set } = useContentHeight()
  const contentRef = useRef<HTMLElement>(null)
  useEffect(() => {
    set(() => {
      return contentRef.current?.getBoundingClientRect() as DOMRect
    })
  }, [contentRef])

  return (
    <>
      <Hader />
      <div className="container">
        <SideNavigation
          userId={userId}
          onLogout={onLogout}
          userCard={userCard}
          onMenuChange={onMenuChange}
          isCard={userCard ? Object.keys(userCard).length : 0}
          ToggleOverlay={ToggleOverlay}
          menuActive={menuActive}
          loding={loding}
          handleModeChange={handleModeChange}
          dark={dark}
        />

        <article className="articleGroup" ref={contentRef}>
          <Outlet />
        </article>
      </div>
    </>
  )
}

export default MainContent
