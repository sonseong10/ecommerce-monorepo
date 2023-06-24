import { firebaseAuth, githubProvider, googleProvider } from './firebase'
import { signInWithPopup } from 'firebase/auth'

class AuthService {
  async login(provideName, setMsg) {
    const authProvider = this.getProvider(provideName)
    try {
      const result = await signInWithPopup(firebaseAuth, authProvider)
      return result
    } catch (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        setMsg(
          'Login Failed',
          `The account exists with different credentials, Please select again.`
        )
      }
    }
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user)
    })
  }

  logout() {
    firebaseAuth.signOut()
  }

  delete(setMsg) {
    const user = firebaseAuth.currentUser
    user
      .delete()
      .then(() => {
        setMsg('Account Deleted', 'See you again.')
      })
      .catch((error) => {
        throw new Error(`Fail to withdraw: ${error.message}`)
      })
  }

  getProvider(provideName) {
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
