import React from 'react'
import EditCardForm from './edit-card-form'

interface IUpdateProps {
  FileInput: any
  userCard: any
  dropDown: any
  updateCard: any
  deleteCard: any
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
