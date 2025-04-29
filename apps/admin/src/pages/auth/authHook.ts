import type { User } from 'firebase/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from 'service/auth_service'
import CardRepository from 'service/card_repository'
import { useIConPopup } from 'components/popup/popupHook'
import { useDispatch } from 'react-redux'
import { rdxInitUser } from './authR'
import { useSelectorEq } from 'commons/store/common'
import type { IState } from 'store/modules'

const authService = new AuthService()
const cardRepository = new CardRepository()

export const useUserId = () => {
  const { userId } = useSelectorEq((state: IState) => ({
    userId: state.auth.user?.uid ? state.auth.user?.uid : '',
  }))

  return { userId }
}

export const useAuth = () => {
  const navigate = useNavigate()
  const iconPopup = useIConPopup()
  const dispatch = useDispatch()

  useEffect(() => {
    authService.onAuthChange((user: User) => {
      if (user) {
        dispatch(rdxInitUser(user))
      }
    })
  }, [])

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
    navigate('/')
    authService.logout()
  }

  const removeAccount = () => {
    // workRepository.removeWorkAll(userId)
    // authService.delete(userId, code => {
    //   if (code >= 200) {
    //     iconPopup(
    //       'alert',
    //       { iconType: 'Check', iconColor: '35C5F0', desc: '작업이 완료되었습니다.', title: '회원탈퇴 성공' },
    //       undefined,
    //       v => v && navigate('/'),
    //     )
    //   }
    // })
  }

  return { onLogin, onLogout, deleteAccount: removeAccount }
}
