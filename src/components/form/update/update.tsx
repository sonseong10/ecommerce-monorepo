import React, { type MemoExoticComponent } from 'react'
import EditCardForm from './edit-card-form'
import type ImageUploader from 'service/image-uploader'
import type DropDown from 'utils/dropdown'

interface IUpdateProps {
  FileInput: MemoExoticComponent<
    (props: {
      imageUploader?: ImageUploader
      name: string
      onFileChange?: (obj: { name?: string; url?: string }) => void
    }) => React.JSX.Element
  >
  userCard?: {
    email: string
    fileName: string
    fileURL: string
    login: boolean
    msg: string
    name: string
    phone: string
    rank: string
    team: string
    telephone: string
    theme: string
  }
  dropDown: DropDown
  updateCard: (card: {
    email: string
    fileName: string
    fileURL: string
    login: boolean
    msg: string
    name: string
    phone: string
    rank: string
    team: string
    telephone: string
    theme: string
  }) => void
  deleteCard: () => void
  dark: boolean
}
const Update = ({
  FileInput,
  userCard,
  dropDown,
  updateCard,
  deleteCard,
  dark,
}: IUpdateProps) => {
  return (
    <div className="col-sm-4 col-md-9">
      <EditCardForm
        FileInput={FileInput}
        userCard={userCard}
        dropDown={dropDown}
        updateCard={updateCard}
        deleteCard={deleteCard}
        dark={dark}
      ></EditCardForm>
    </div>
  )
}

export default Update
