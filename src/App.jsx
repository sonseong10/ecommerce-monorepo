import React, { useEffect, useState } from 'react'
import Router from './routers/router'
import { useHistory } from 'react-router-dom'

import SideNavigation from './components/side-navigation'
import NotLogin from './components/errors/not-login'
import Overlay from './components/common/overlay'
import AuthPopup from './components/common/auth-popup'

import './styles/main.css'

const App = ({ FileInput, authService, dropDown, cardRepository }) => {
  const history = useHistory()
  const historyState = history?.location?.state
  const [overlay, setOverlay] = useState('close')
  const [userId, setUserId] = useState(historyState && historyState.id)
  const [cards, setCards] = useState({})
  const [userCard, setUserCard] = useState({})
  const [isCard, setIsCard] = useState(false)

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid)
        setIsCard(true)
      } else {
        setUserId(null)
        setIsCard(false)
      }
    })
  }, [authService])

  useEffect(() => {
    const stopSync = cardRepository.syncCards((cards) => {
      setCards(cards)
    })
    return () => stopSync()
  }, [cardRepository, userId])

  useEffect(() => {
    const stopSync = cardRepository.userCard(userId, (card) => {
      Object.keys(card).map((item) => {
        return setUserCard(card[item])
      })
    })
    return () => stopSync()
  }, [cardRepository, userId])

  useEffect(() => {
    Object.keys(userCard).length === 0 ? setIsCard(true) : setIsCard(false)
  }, [userCard])

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

  const deleteCard = () => {
    setCards((cards) => {
      const updated = { ...cards }
      delete updated[userId]
      return updated
    })
    setUserCard({})
    setIsCard(true)
    cardRepository.removeCard(userId)
    history.push('/')
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <SideNavigation
            handleOpenPopup={handleOpenPopup}
            authService={authService}
            userId={userId}
            userCard={userCard}
            isCard={isCard}
          ></SideNavigation>
          {!userId ? (
            <NotLogin isCard={isCard} />
          ) : (
            <Router
              FileInput={FileInput}
              cards={cards}
              dropDown={dropDown}
              userCard={userCard}
              isCard={isCard}
              createCard={createOrUpdateCard}
              updateCard={createOrUpdateCard}
              deleteCard={deleteCard}
            ></Router>
          )}
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
