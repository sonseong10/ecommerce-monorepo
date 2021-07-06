import React, { useEffect } from 'react'
import LodingSpinner from '../common/loding-spinner'
import AddCardForm from './add-card-form'

const Maker = ({ FileInput, dropDown, createCard, isCard, onSetHome }) => {
  useEffect(() => {
    onSetHome()
  })

  return (
    <div className="col-sm-4 col-md-9">
      <div className="wrapper">
        {isCard ? (
          <LodingSpinner></LodingSpinner>
        ) : (
          <AddCardForm
            FileInput={FileInput}
            createCard={createCard}
            dropDown={dropDown}
          />
        )}
      </div>
    </div>
  )
}

export default Maker
