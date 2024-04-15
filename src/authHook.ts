import type { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AuthService from 'service/auth_service'
import WorkRepository from 'service/work-repository'

const authService = new AuthService()
const workRepository = new WorkRepository()

export const useAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const historyState = location?.state
  const [userId, setUserId] = useState(historyState && historyState.id)
  const [popupMsg, setpopupMsg] = useState({ title: '', desc: '' })
  const [magPopup, setMagPopup] = useState(false)

  useEffect(() => {
    authService.onAuthChange((user: User) => {
      if (user) {
        setUserId(user.uid)
      } else {
        setUserId('')
        navigate('/')
      }
    })
  }, [authService, navigate])

  const setMsg = (title: string, desc: string) => {
    setpopupMsg({
      title: '',
      desc: '',
    })
    setpopupMsg({
      title: title,
      desc: desc,
    })
    setMagPopup(true)
  }

  const onLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    authService
      .login(event.currentTarget!.value, setMsg)
      // .then(
      //   data => console.log(data),

      //   // data &&
      //   // cards![data.user.uid] &&
      //   // cardRepository.saveCard(data.user.uid, {
      //   //   ...cards![data.user.uid],
      //   //   login: true,
      //   // }),
      // )
      .then(() => navigate('/admin/main'))
  }

  const onLogout = () => {
    // userCard &&
    //   Object.keys(userCard!).length &&
    //   cardRepository.saveCard(userId, {
    //     ...(
    //       cards as {
    //         [key: string]: ICardVo
    //       }
    //     )[userId],
    //     login: false,
    //   })
    // setUserCard(undefined)
    window.location.href = '/'
    authService.logout()
  }

  const deleteAccount = () => {
    // deleteCard()
    // setWorks({})
    // setUserCard(undefined)
    setMagPopup(true)
    workRepository.removeWorkAll(userId)
    authService.delete(setMsg)
  }

  return { userId, onLogin, onLogout, deleteAccount, popupMsg, magPopup, setMagPopup }
}
