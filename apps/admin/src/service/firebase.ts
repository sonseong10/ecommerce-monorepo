import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth()
export const firebaseDatabase = getDatabase(firebaseApp)
export const googleProvider = new GoogleAuthProvider()
export const githubProvider = new GithubAuthProvider()
