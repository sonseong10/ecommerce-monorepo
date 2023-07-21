import { firebaseAuth, githubProvider, googleProvider } from './firebase'
import { signInWithPopup, type User } from 'firebase/auth'

class AuthService {
  async login(
    provideName: string,
    setMsg: (title: string, desc: string) => void
  ) {
    const authProvider = this.getProvider(provideName)
    try {
      const result = await signInWithPopup(firebaseAuth, authProvider)
      return result
    } catch (error: any) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        setMsg(
          'Login Failed',
          `The account exists with different credentials, Please select again.`
        )
      }
    }
  }

  onAuthChange(onUserChanged: (user: User) => void) {
    firebaseAuth.onAuthStateChanged((user) => {
      user && onUserChanged(user)
    })
  }

  logout() {
    firebaseAuth.signOut()
  }

  delete(setMsg: {
    (title: string, desc: string): void
    (arg0: string, arg1: string): void
  }) {
    const user = firebaseAuth.currentUser
    user
      ?.delete()
      .then(() => {
        setMsg('Account Deleted', 'See you again.')
      })
      .catch((error) => {
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
