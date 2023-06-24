import React, { memo } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ImageFileInput from './components/common/image-file-input'
import AuthService from './service/auth_service'
import CardRepository from './service/card_repository'
import WorkRepository from './service/work-repository'
import ImageUploader from './service/image-uploader'
import DropDown from './utils/dropdown'

const authService = new AuthService()
const imageUploader = new ImageUploader()
const cardRepository = new CardRepository()
const workRepository = new WorkRepository()
const dropDown = new DropDown()

const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader}></ImageFileInput>
))
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        authService={authService}
        dropDown={dropDown}
        FileInput={FileInput}
        cardRepository={cardRepository}
        workRepository={workRepository}
      />
    </BrowserRouter>
  </React.StrictMode>
)


