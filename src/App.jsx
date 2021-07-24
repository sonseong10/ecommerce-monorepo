import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import GlobalHeader from './components/common/global-header'
import MainContent from './components/main-content'

import GlobalFooter from './components/common/global-footer'
import Overlay from './components/common/overlay'
import AuthPopup from './components/common/popup/auth-popup'
import MsgPopup from './components/common/popup/msg-popup'
import MobileSideBar from './components/common/mobile-sidebar'

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
  const [works, setWorks] = useState({})
  const [userCard, setUserCard] = useState({})
  const [popupMsg, setpopupMsg] = useState({})

  const [menuActive, setMenuActive] = useState('')
  const [loding, setLoding] = useState(false)
  const [authPopup, setAuthPopup] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [magPopup, setMagPopup] = useState(false)
  const [dark, setDark] = useState(localStorage.getItem('darkMode') === 'true')

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
    setMagPopup(true)
    workRepository.removeWorkAll(userId)
    authService.delete(setMsg)
  }

  const setMsg = (title, desc) => {
    setpopupMsg({})
    setpopupMsg({
      title: title,
      desc: desc,
    })
    setMagPopup(true)
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

  useEffect(() => {
    localStorage.setItem('darkMode', dark)
  }, [dark])

  const handleModeChange = useCallback(() => {
    document.body.classList.toggle('isDark')
    setDark(!dark)
  }, [dark])

  const toggleOverlay = useCallback(() => {
    setAuthPopup(!authPopup)
  }, [authPopup])

  const toggleOpenSideBar = useCallback(() => {
    setSidebarOpen(!sidebarOpen)
  }, [sidebarOpen])

  const toggleMsgPopup = useCallback(() => {
    setMagPopup(!magPopup)
  }, [magPopup])

  const onMenuChange = useCallback((value) => {
    setMenuActive(value)
  }, [])

  return (
    <div className={`app ${dark && 'isDark'}`}>
      <GlobalHeader
        userId={userId}
        userCard={userCard}
        toggleOverlay={toggleOverlay}
        toggleOpenSideBar={toggleOpenSideBar}
        dark={dark}
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
        handleModeChange={handleModeChange}
        dark={dark}
      ></MainContent>

      <MobileSideBar
        onLogout={onLogout}
        isCard={Object.keys(userCard).length}
        sidebarOpen={sidebarOpen}
        toggleOpenSideBar={toggleOpenSideBar}
        handleModeChange={handleModeChange}
        dark={dark}
      ></MobileSideBar>

      <AuthPopup
        authPopup={authPopup}
        ToggleOverlay={toggleOverlay}
        authService={authService}
        onLogin={onLogin}
      ></AuthPopup>

      {!userId ? (
        <Overlay overlay={authPopup} ToggleOverlay={toggleOverlay}></Overlay>
      ) : (
        <div className="sm-only">
          <Overlay
            overlay={sidebarOpen}
            ToggleOverlay={toggleOpenSideBar}
          ></Overlay>
        </div>
      )}

      {magPopup && (
        <>
          <MsgPopup
            popupMsg={popupMsg}
            magPopup={magPopup}
            toggleMsgPopup={toggleMsgPopup}
          ></MsgPopup>
          <Overlay overlay={magPopup} ToggleOverlay={toggleMsgPopup}></Overlay>
        </>
      )}

      <GlobalFooter
        userId={userId}
        menuActive={menuActive}
        dark={dark}
      ></GlobalFooter>
    </div>
  )
}

export default App
