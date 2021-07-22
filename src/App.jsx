import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import GlobalHeader from './components/global-header'
import MainContent from './components/common/main-content'

import Overlay from './components/common/overlay'
import AuthPopup from './components/common/auth-popup'

import './styles/main.css'
import MobileSideBar from './components/mobile-sidebar'
import GlobalFooter from './components/global-footer'
import MsgPopup from './components/common/msg-popup'

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
  const [works, setWorks] = useState({})
  const [userCard, setUserCard] = useState({})
  const [popupMsg, setpopupMsg] = useState({})

  const [menuActive, setMenuActive] = useState('')
  const [loding, setLoding] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPopup, setIsOpenPopup] = useState(false)

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

  const onLogin = (event) => {
    authService.login(event.currentTarget.value, setMsg).then(
      (data) =>
        data &&
        cards[data.user.uid] &&
        cardRepository.saveCard(data.user.uid, {
          ...cards[data.user.uid],
          login: true,
        })
    )
    setWorks({})
    setUserCard({})
    history.push('/')
  }

  const onLogout = () => {
    Object.keys(userCard).length &&
      cardRepository.saveCard(userId, { ...cards[userId], login: false })
    setUserCard({})
    history.push('/')
    authService.logout()
  }

  const deleteAccount = () => {
    deleteCard()
    setWorks({})
    setUserCard({})
    setIsOpenPopup(true)
    workRepository.removeWorkAll(userId)
    authService.delete(setMsg)
  }

  const setMsg = (title, desc) => {
    setpopupMsg({
      title: title,
      desc: desc,
    })
    setIsOpenPopup(true)
  }

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
      setUserCard({ ...cards[userId] })
    } else {
      setUserCard({})
    }
  }, [cards, userId])

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
    cardRepository.removeCard(userId)
  }

  useEffect(() => {
    if (!userId) {
      return
    }
    const stopSync = workRepository.syncWorks(userId, (works) => {
      setWorks(works)
    })
    return () => {
      stopSync()
    }
  }, [userId, workRepository])

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

  const toggleOverlay = () => {
    setOverlay(!overlay)
  }

  const toggleOpenSideBar = () => {
    setIsOpen(!isOpen)
  }

  const toggleMsgPopup = () => {
    setIsOpenPopup(!isOpenPopup)
  }

  const onMenuChange = (value) => {
    setMenuActive(value)
  }

  return (
    <div className="app">
      <GlobalHeader
        userId={userId}
        userCard={userCard}
        toggleOverlay={toggleOverlay}
        toggleOpenSideBar={toggleOpenSideBar}
      ></GlobalHeader>
      <MainContent
        FileInput={FileInput}
        dropDown={dropDown}
        userId={userId}
        onLogout={onLogout}
        deleteAccount={deleteAccount}
        cards={cards}
        works={works}
        userCard={userCard}
        createOrUpdateCard={createOrUpdateCard}
        createOrUpdateWork={createOrUpdateWork}
        deleteWork={deleteWork}
        loding={loding}
        onMenuChange={onMenuChange}
        ToggleOverlay={toggleOverlay}
        menuActive={menuActive}
      ></MainContent>
      <MobileSideBar
        onLogout={onLogout}
        isCard={Object.keys(userCard).length}
        isOpen={isOpen}
        toggleOpenSideBar={toggleOpenSideBar}
      ></MobileSideBar>
      <AuthPopup
        overlay={overlay}
        ToggleOverlay={toggleOverlay}
        authService={authService}
        onLogin={onLogin}
      ></AuthPopup>

      {!userId ? (
        <Overlay overlay={overlay} ToggleOverlay={toggleOverlay}></Overlay>
      ) : (
        <div>
          <Overlay overlay={isOpen} ToggleOverlay={toggleOpenSideBar}></Overlay>
        </div>
      )}

      {isOpenPopup && (
        <>
          <MsgPopup
            popupMsg={popupMsg}
            isOpenPopup={isOpenPopup}
            toggleMsgPopup={toggleMsgPopup}
          ></MsgPopup>
          <Overlay
            overlay={isOpenPopup}
            ToggleOverlay={toggleMsgPopup}
          ></Overlay>
        </>
      )}

      <GlobalFooter userId={userId} menuActive={menuActive}></GlobalFooter>
    </div>
  )
}

export default App
