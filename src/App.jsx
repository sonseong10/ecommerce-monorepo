import React, { useState } from 'react'

import './styles/main.css'

import SideNavigation from './components/side-navigation'
import SearchPage from './components/search/search-page'
import ResultPage from './components/search/result-page'
import HomePage from './components/home/home-page'
import Overlay from './components/common/overlay'
import AuthPopup from './components/common/auth-popup'

const App = () => {
  const [menus, setMenus] = useState('home')
  const [overlay, setOverlay] = useState('close')

  const handleHomeActive = () => {
    setMenus('home')
  }

  const handleSearchActive = () => {
    setMenus('search')
  }

  const handleOpenPopup = () => {
    overlay === 'close' ? setOverlay('open') : setOverlay('close')
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <SideNavigation
            handleHomeActive={handleHomeActive}
            handleSearchActive={handleSearchActive}
            handleOpenPopup={handleOpenPopup}
            menus={menus}
          ></SideNavigation>
          {menus === 'home' ? (
            <HomePage></HomePage>
          ) : (
            <>
              <SearchPage></SearchPage>
              <ResultPage></ResultPage>
            </>
          )}
        </div>
      </div>
      <AuthPopup
        overlay={overlay}
        handleOpenPopup={handleOpenPopup}
      ></AuthPopup>
      <Overlay overlay={overlay} handleOpenPopup={handleOpenPopup}></Overlay>
    </>
  )
}

export default App
