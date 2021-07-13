import React, { useEffect } from 'react'
import AddCardForm from './add-card-form'

const Maker = ({ FileInput, dropDown, createCard, onMenuChange }) => {
  useEffect(() => {
    onMenuChange('home')
  })

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      <div className="wrapper">
        <AddCardForm
          FileInput={FileInput}
          createCard={createCard}
          dropDown={dropDown}
        />
      </div>
    </div>
  )
}

export default Maker
