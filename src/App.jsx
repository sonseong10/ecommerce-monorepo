import React, { useEffect, useState } from 'react'

import './styles/main.css'

import SideNavigation from './components/side-navigation'
import Overlay from './components/common/overlay'
import AuthPopup from './components/common/auth-popup'
import Router from './routers/router'
import { BrowserRouter } from 'react-router-dom'

const App = ({ authService }) => {
  const [menus, setMenus] = useState('home')
  const [overlay, setOverlay] = useState('close')
  const [isUser, setIsUser] = useState(false)

  const handleHomeActive = () => {
    setMenus('home')
  }

  const handleSearchActive = () => {
    setMenus('search')
  }

  const handleOpenPopup = () => {
    overlay === 'close' ? setOverlay('open') : setOverlay('close')
  }

  useEffect(() => {
    authService.onAuthChange((user) => {
      user ? setIsUser(true) : setIsUser(false)
    })
  })

  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <SideNavigation
            handleHomeActive={handleHomeActive}
            handleSearchActive={handleSearchActive}
            handleOpenPopup={handleOpenPopup}
            menus={menus}
            isUser={isUser}
            authService={authService}
          ></SideNavigation>
          <Router
            authService={authService}
            isUser={isUser}
            handleHomeActive={handleHomeActive}
            handleSearchActive={handleSearchActive}
          ></Router>
        </div>
      </div>
      <AuthPopup
        overlay={overlay}
        handleOpenPopup={handleOpenPopup}
        authService={authService}
      ></AuthPopup>
      <Overlay overlay={overlay} handleOpenPopup={handleOpenPopup}></Overlay>
    </BrowserRouter>
  )
}

export default App
