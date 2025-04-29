import { useEffect, useRef } from 'react'
import SideNavigation from './sideNavigation'
import { Outlet } from 'react-router-dom'
import Hader from './Hader'
import { useContentHeight } from 'commons/layers/store/layerHook'

const MainContent = () => {
  const { set } = useContentHeight()
  const contentRef = useRef<HTMLElement>(null)
  useEffect(() => {
    set(() => {
      return contentRef.current?.getBoundingClientRect() as DOMRect
    })
  }, [contentRef.current])

  return (
    <>
      <Hader />
      <div className="container">
        <SideNavigation />
        <article className="articleGroup" ref={contentRef}>
          <Outlet />
        </article>
      </div>
    </>
  )
}

export default MainContent
