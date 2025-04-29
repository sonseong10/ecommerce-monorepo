import CardRepository from './card_repository'
import { firebaseAuth, githubProvider, googleProvider } from './firebase'
import { signInWithPopup, type User } from 'firebase/auth'

const cardRepository = new CardRepository()

class AuthService {
  async login(provideName: string, errorCode: (code: number) => void) {
    const authProvider = this.getProvider(provideName)
    try {
      const result = await signInWithPopup(firebaseAuth, authProvider)
      return result
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        return errorCode(204)
      }
    }
  }

  onAuthChange(onUserChanged: (user: User) => void) {
    firebaseAuth.onAuthStateChanged(user => {
      user && onUserChanged(user)
    })
  }

  logout() {
    firebaseAuth.signOut()
  }

  delete(userId: string, callBack: (code: number) => void) {
    const user = firebaseAuth.currentUser
    user
      ?.delete()
      .then(() => {
        cardRepository.removeCard(userId)
        callBack(200)
      })
      .catch(error => {
        throw new Error(`Fail to withdraw: ${error.message}`)
      })
  }

  getProvider(provideName: string) {
    switch (provideName) {
      case 'Google':
        return googleProvider
      case 'Github':
        return githubProvider
      default:
        throw new Error(`not supportted provider: ${provideName}`)
    }
  }
}

export default AuthService
