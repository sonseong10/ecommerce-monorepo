import { firebaseAuth, githubProvider, googleProvider } from './firebase'

class AuthService {
  async login(provideName) {
    const authProvider = this.getProvider(provideName)
    try {
      const result = await firebaseAuth.signInWithPopup(authProvider)
      return result
    } catch (error) {
      console.log(error.message)
      return
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

  delete(setpopupMsg) {
    const user = firebaseAuth.currentUser
    user
      .delete()
      .then(() => {
        setpopupMsg({
          title: 'Account Deleted',
          desc: 'See you again.',
        })
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
