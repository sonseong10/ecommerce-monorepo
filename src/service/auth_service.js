import firebase from 'firebase'
import firebaseApp from './firebase'

class AuthService {
  login(provideName) {
    const authProvider = new firebase.auth[`${provideName}AuthProvider`]()
    return firebaseApp.auth().signInWithPopup(authProvider)
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user)
    })
  }

  logout() {
    firebase.auth().signOut()
  }
}

export default AuthService
