import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AuthService from './service/auth.service'

const authService = new AuthService()
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
)
