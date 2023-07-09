import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import GlobalHeader from './components/common/global-header'
import MainContent from './components/main-content'

import GlobalFooter from './components/common/global-footer'
import Overlay from './components/common/overlay'
import AuthPopup from './components/common/popup/auth-popup'
import MsgPopup from './components/common/popup/msg-popup'
import MobileSideBar from './components/common/mobile-sidebar'

import './styles/main.css'

interface IAppProps {
  FileInput: any
  dropDown: any
  authService: any
  cardRepository: any
  workRepository: any
}

const App = ({
  FileInput,
  dropDown,
  authService,
  cardRepository,
  workRepository,
}: IAppProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const historyState = location?.state

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
    authService.onAuthChange((user: any) => {
      if (user) {
        setUserId(user.uid)
      } else {
        setUserId('')
        navigate('/')
      }
      setLoding(false)
    })
  }, [authService, navigate])

  const onLogin = (event: any) => {
    authService.login(event.currentTarget.value, setMsg).then(
      (data: any) =>
        data &&
        (cards as any)[data.user.uid] &&
        cardRepository.saveCard(data.user.uid, {
          ...(cards as any)[data.user.uid],
          login: true,
        })
    )
    setWorks({})
    setUserCard({})
    navigate('/')
  }

  const onLogout = () => {
    Object.keys(userCard).length &&
      cardRepository.saveCard(userId, {
        ...(cards as any)[userId],
        login: false,
      })
    setUserCard({})
    navigate('/')
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

  const setMsg = (title: string, desc: string) => {
    setpopupMsg({})
    setpopupMsg({
      title: title,
      desc: desc,
    })
    setMagPopup(true)
  }

  useEffect(() => {
    cardRepository.syncCards((cards: any) => {
      setCards(cards)
    })
    return () => {}
  }, [cardRepository, userId])

  useEffect(() => {
    if (!userId) {
      return
    }
    if (Object.keys(cards).find((item) => item === userId)) {
      setUserCard({ ...(cards as any)[userId] })
    } else {
      setUserCard({})
    }
  }, [cards, userId])

  const createOrUpdateCard = (card: any) => {
    setCards((cards) => {
      const updated: any = { ...cards }
      updated[userId] = card
      return updated
    })
    cardRepository.saveCard(userId, card)
  }

  const deleteCard = () => {
    setCards((cards) => {
      const updated: any = { ...cards }
      delete updated[userId]
      return updated
    })
    cardRepository.removeCard(userId)
  }

  useEffect(() => {
    if (!userId) {
      return
    }
    const stopSync = workRepository.syncWorks(userId, (works: any) => {
      setWorks(works)
    })
    return () => {
      stopSync()
    }
  }, [userId, workRepository])

  const createOrUpdateWork = (work: any) => {
    setWorks((works) => {
      const updated: any = { ...works }
      updated[userId] = work
      return updated
    })
    workRepository.saveWork(userId, work)
  }

  const deleteWork = (work: any) => {
    setWorks((works) => {
      const updated: any = { ...works }
      delete updated[work.time]
      return updated
    })
    workRepository.removeWork(userId, work)
  }

  useEffect(() => {
    localStorage.setItem('darkMode', dark as any)
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

  const onMenuChange = useCallback((value: any) => {
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
