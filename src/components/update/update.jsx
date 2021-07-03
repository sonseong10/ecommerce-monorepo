import React from 'react'
import EditCardForm from './edit-card-form'

const Update = ({ FileInput, userCard, dropDown, updateCard, deleteCard }) => {
  return (
    <div className="col-sm-4 col-md-9">
      <div className="wrapper">
        <EditCardForm
          FileInput={FileInput}
          userCard={userCard}
          dropDown={dropDown}
          updateCard={updateCard}
          deleteCard={deleteCard}
        ></EditCardForm>
      </div>
    </div>
  )
}

export default Update
