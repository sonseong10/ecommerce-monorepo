import React, { type MemoExoticComponent } from 'react'
import EditCardForm from './edit-card-form'
import type ImageUploader from 'service/image-uploader'
import type DropDown from 'utils/dropdown'
import type { ICardVo } from 'types/grobal-type'

interface IUpdateProps {
  FileInput: MemoExoticComponent<
    (props: {
      imageUploader?: ImageUploader
      name: string
      onFileChange?: (obj: { name?: string; url?: string }) => void
    }) => React.JSX.Element
  >
  userCard?: ICardVo
  dropDown: DropDown
  updateCard: (card: ICardVo) => void
  deleteCard: () => void
  dark: boolean
}

const Update = ({ FileInput, userCard, dropDown, updateCard, deleteCard, dark }: IUpdateProps) => {
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
