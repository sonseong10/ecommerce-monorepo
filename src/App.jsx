import React, { useEffect, useState } from 'react'
import Router from './routers/router'
import { useHistory } from 'react-router-dom'

import SideNavigation from './components/side-navigation'
import NotLogin from './components/errors/not-login'
import Overlay from './components/common/overlay'
import AuthPopup from './components/common/auth-popup'

import './styles/main.css'

const App = ({
  FileInput,
  dropDown,
  authService,
  cardRepository,
  workRepository,
}) => {
  const history = useHistory()
  const historyState = history?.location?.state
  const [userId, setUserId] = useState(historyState && historyState.id)

  const [cards, setCards] = useState({})
  const [userCard, setUserCard] = useState({})
  const [isCard, setIsCard] = useState(false)

  const [works, setWorks] = useState({})

  const [menuActive, setMenuActive] = useState('')
  const [loding, setLoding] = useState(false)
  const [overlay, setOverlay] = useState(false)

  useEffect(() => {
    const stopSync = cardRepository.syncCards((cards) => {
      setCards(cards)
    })
    return () => {
      stopSync()
    }
  }, [cardRepository, userId])

  useEffect(() => {
    if (!userId) {
      return
    }
    if (Object.keys(cards).find((item) => item === userId)) {
      setIsCard(true)
      setUserCard({ ...cards[userId] })
    } else {
      setIsCard(false)
      setUserCard({})
    }
  }, [cards, userId])

  useEffect(() => {
    setLoding(true)
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid)
      } else {
        setUserId('')
        history.push('/')
      }
      setLoding(false)
    })
  }, [authService, history])

  useEffect(() => {
    const stopSync = workRepository.syncWorks(userId, (works) => {
      setWorks(works)
    })
    return () => {
      stopSync()
    }
  }, [userId, workRepository])

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
    setIsCard(false)
    cardRepository.removeCard(userId)
    history.push('/maker')
  }

  const createOrUpdateWork = (work) => {
    setWorks((works) => {
      const updated = { ...works }
      updated[userId] = work
      return updated
    })
    workRepository.saveWork(userId, work)
  }

  const deleteWork = (work) => {
    setWorks((works) => {
      const updated = { ...works }
      delete updated[work.time]
      return updated
    })
    workRepository.removeWork(userId, work)
  }

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.value)
      .then(
        (data) =>
          isCard &&
          cardRepository.saveCard(data.user.uid, {
            ...cards[data.user.uid],
            login: true,
          })
      )
      .then(history.push('/'))
  }

  const onLogout = () => {
    isCard && createOrUpdateCard({ ...cards[userId], login: false })
    authService.logout()
    history.push('/')
  }

  const ToggleOverlay = () => {
    setOverlay(!overlay)
  }

  const onMenuChange = (value) => {
    setMenuActive(value)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <SideNavigation
            ToggleOverlay={ToggleOverlay}
            authService={authService}
            userId={userId}
            userCard={userCard}
            loding={loding}
            isCard={isCard}
            onLogout={onLogout}
            menuActive={menuActive}
          ></SideNavigation>
          {!userId ? (
            <NotLogin loding={loding} />
          ) : (
            <Router
              FileInput={FileInput}
              cards={cards}
              works={works}
              userId={userId}
              dropDown={dropDown}
              userCard={userCard}
              isCard={isCard}
              onMenuChange={onMenuChange}
              createCard={createOrUpdateCard}
              updateCard={createOrUpdateCard}
              deleteCard={deleteCard}
              createWork={createOrUpdateWork}
              updateWork={createOrUpdateWork}
              deleteWork={deleteWork}
            ></Router>
          )}
        </div>
      </div>
      <AuthPopup
        overlay={overlay}
        ToggleOverlay={ToggleOverlay}
        authService={authService}
        onLogin={onLogin}
      ></AuthPopup>
      <Overlay overlay={overlay} ToggleOverlay={ToggleOverlay}></Overlay>
    </>
  )
}

export default App
