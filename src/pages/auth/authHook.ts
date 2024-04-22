import type { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AuthService from 'service/auth_service'
import WorkRepository from 'service/work-repository'
import CardRepository from 'service/card_repository'
import { useIConPopup } from 'components/popup/popupHook'

const authService = new AuthService()
const workRepository = new WorkRepository()
const cardRepository = new CardRepository()

export const useAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const iconPopup = useIConPopup()
  const historyState = location?.state
  const [userId, setUserId] = useState(historyState && historyState.id)
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

  const onLogin = (value: 'Google' | 'Github') => {
    authService
      .login(value, code => {
        if (code === 204) {
          iconPopup(
            'alert',
            { iconColor: 'ff4949', iconType: 'Closed', desc: '이미 등록된 이메일입니다.', title: '회원가입실패' },
            undefined,
            v => {
              v && navigate('/')
            },
          )
        }
      })
      .then(
        data =>
          data &&
          cardRepository.syncCard(data.user.uid, value => {
            if (value) {
              cardRepository.saveCard(data.user.uid, { ...value, login: true })
            } else {
              cardRepository.saveCard(data.user.uid, {
                email: data.user.email ? data.user.email : '',
                fileName: data.user.displayName ? `${data.user.displayName}프로필` : '사용자프로필',
                fileURL: data.user.photoURL ? data.user.photoURL : '',
                login: true,
                msg: '',
                name: data.user.displayName ? data.user.displayName : '',
                phone: data.user.phoneNumber ? data.user.phoneNumber : '',
                rank: '직원',
                team: '개발',
                telephone: data.user.phoneNumber ? data.user.phoneNumber : '',
                theme: 'Gray',
              })
            }
            navigate('/admin/main')
          }),
      )
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
    navigate('/')
    authService.logout()
  }

  const deleteAccount = () => {
    workRepository.removeWorkAll(userId)
    authService.delete(userId, code => {
      if (code >= 200) {
        iconPopup(
          'alert',
          { iconType: 'Check', iconColor: '35C5F0', desc: '작업이 완료되었습니다.', title: '회원탈퇴 성공' },
          undefined,
          v => v && navigate('/'),
        )
      }
    })
  }

  return { userId, onLogin, onLogout, deleteAccount, magPopup, setMagPopup }
}
