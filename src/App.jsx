import React, { useEffect, useState } from 'react'

import './styles/main.css'

import SideNavigation from './components/side-navigation'
import Overlay from './components/common/overlay'
import AuthPopup from './components/common/auth-popup'
import Router from './routers/router'
import { BrowserRouter } from 'react-router-dom'

const App = ({ FileInput, authService, dropDown }) => {
  const [menus, setMenus] = useState('')
  const [overlay, setOverlay] = useState('close')
  const [isUser, setIsUser] = useState(false)
  const [searchIsOpen, setSearchIsOpen] = useState(true)

  const [cards, setCards] = useState([
    {
      uid: '1',
      team: '개발',
      ramk: '대리',
      name: 'Anna',
      theme: 'Gray',
      msg: '오늘도 화이팅!',
      phone: '010-1234-5678',
      telephone: '9101',
      imgURL: null,
      email: 'test123@abc.com',
    },
  ])

  const onSearchOpen = () => {
    setSearchIsOpen()
  }

  const handleHomeActive = () => {
    setMenus('home')
  }

  const handleSearchActive = () => {
    setMenus('search')
  }

  const handleOpenPopup = () => {
    overlay === 'close' ? setOverlay('open') : setOverlay('close')
  }

  const addCard = (card) => {
    const updated = [...cards, card]
    setCards(updated)
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
            setSearchIsOpen={setSearchIsOpen}
          ></SideNavigation>
          <Router
            authService={authService}
            dropDown={dropDown}
            isUser={isUser}
            handleHomeActive={handleHomeActive}
            handleSearchActive={handleSearchActive}
            searchIsOpen={searchIsOpen}
            onSearchOpen={onSearchOpen}
            cards={cards}
            addCard={addCard}
            FileInput={FileInput}
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
