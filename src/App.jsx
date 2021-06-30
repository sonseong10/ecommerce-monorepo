import React, { useEffect, useState } from 'react'

import './styles/main.css'

import SideNavigation from './components/side-navigation'
import Overlay from './components/common/overlay'
import AuthPopup from './components/common/auth-popup'
import Router from './routers/router'
import { useHistory } from 'react-router-dom'
import NotLogin from './components/errors/not-login'
import LodingSpinner from './components/common/loding-spinner'

const App = ({ FileInput, authService, dropDown, cardRepository }) => {
  const history = useHistory()
  const historyState = history?.location?.state
  const [naveState, setNavState] = useState('')
  const [overlay, setOverlay] = useState('close')
  const [userId, setUserId] = useState(historyState && historyState.id)

  const [cards, setCards] = useState({})
  const [userCard, setUserCards] = useState({})

  useEffect(() => {
    if (!userId) {
      return
    }
    const stopSync = cardRepository.syncCards((cards) => {
      setCards(cards)
    })
    return () => stopSync()
  }, [cardRepository, userId])

  useEffect(() => {
    if (!userId) {
      return
    }
    async function fetchAndSetUser() {
      const stopSync = await cardRepository.userCard(userId, (card) => {
        Object.keys(card).map((item) => setUserCards(card[item]))
      })
      return () => stopSync()
    }
    fetchAndSetUser()
  }, [cardRepository, userId])

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid)
      } else {
        setUserId('')
        history.push('/')
      }
    })
  }, [authService, history])

  const homeActive = () => {
    setNavState('home')
  }

  const searchActive = () => {
    setNavState('search')
  }

  const handleOpenPopup = () => {
    overlay === 'close' ? setOverlay('open') : setOverlay('close')
  }

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards }
      updated[userId] = card
      return updated
    })
    cardRepository.saveCard(userId, card)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <SideNavigation
            handleOpenPopup={handleOpenPopup}
            naveState={naveState}
            authService={authService}
            loginState={userId}
            userCard={userCard}
          ></SideNavigation>
          {userId ? (
            <Router
              cards={cards}
              FileInput={FileInput}
              cardRepository={cardRepository}
              dropDown={dropDown}
              userId={userId}
              userCard={userCard}
              createCard={createOrUpdateCard}
              updateCard={createOrUpdateCard}
              homeActive={homeActive}
              searchActive={searchActive}
            ></Router>
          ) : (
            <NotLogin></NotLogin>
          )}
          <LodingSpinner></LodingSpinner>
        </div>
      </div>
      <AuthPopup
        overlay={overlay}
        handleOpenPopup={handleOpenPopup}
        authService={authService}
      ></AuthPopup>
      <Overlay overlay={overlay} handleOpenPopup={handleOpenPopup}></Overlay>
    </>
  )
}

export default App
