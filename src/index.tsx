import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import ImageFileInput from './components/common/image-file-input'
import AuthService from './service/auth_service'
import CardRepository from './service/card_repository'
import WorkRepository from './service/work-repository'
import ImageUploader from './service/image-uploader'
import DropDown from './utils/dropdown'
import App from 'App'

const authService = new AuthService()
const imageUploader = new ImageUploader()
const cardRepository = new CardRepository()
const workRepository = new WorkRepository()
const dropDown = new DropDown()

const FileInput = (props: any) => {
  return (
    <>
      <ImageFileInput {...props} imageUploader={imageUploader} />
    </>
  )
}
const FileInputMemo = React.memo(FileInput)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <BrowserRouter>
    <App
      authService={authService}
      dropDown={dropDown}
      FileInput={FileInputMemo}
      cardRepository={cardRepository}
      workRepository={workRepository}
    />
  </BrowserRouter>
)
