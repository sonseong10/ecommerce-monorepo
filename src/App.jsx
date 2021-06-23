import React, { useEffect, useState } from 'react'

import './styles/main.css'

import SideNavigation from './components/side-navigation'
import Overlay from './components/common/overlay'
import AuthPopup from './components/common/auth-popup'
import Router from './routers/router'
import { BrowserRouter, useHistory } from 'react-router-dom'

const App = ({ FileInput, authService, dropDown, cardRepository }) => {
  const history = useHistory()
  const historyState = history?.location?.state;
  const [menus, setMenus] = useState('')
  const [overlay, setOverlay] = useState('close')
  const [searchIsOpen, setSearchIsOpen] = useState(true)
  const [userId, setUserId] = useState(historyState && historyState.id)

  const [cards, setCards] = useState({})

  useEffect(()=> {
    if(!userId) {
      return
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    })
    return () => stopSync()
  }, [cardRepository, userId])

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid)
      } else {
        history.push('/')
      }
    })
  })

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

  const createOrUpdateCard = (card) => {
    setCards(cards => {
      const updated = {...cards}
      updated[card.uid] = card;
      return updated
    })
    cardRepository.saveCard(userId, card)
  }

  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <SideNavigation
            handleHomeActive={handleHomeActive}
            handleSearchActive={handleSearchActive}
            handleOpenPopup={handleOpenPopup}
            menus={menus}
            authService={authService}
            setSearchIsOpen={setSearchIsOpen}
          ></SideNavigation>
          <Router
            FileInput={FileInput}
            dropDown={dropDown}
            searchIsOpen={searchIsOpen}
            onSearchOpen={onSearchOpen}
            cards={cards}
            createCard={createOrUpdateCard}
            updateCard={createOrUpdateCard}
            cardRepository={cardRepository}
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
