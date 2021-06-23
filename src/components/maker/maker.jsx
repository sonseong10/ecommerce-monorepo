import React from 'react'
import AddCardForm from './add-card-form'
import EditCardForm from './edit-card-form'

const Maker = ({ FileInput, dropDown, cards, createCard, updateCard }) => {
  const key = Object.keys(cards).filter((key) =>  key.includes('1624456696786'))

  return (
    <div className="col-sm-4 col-md-9">
      <div className="wrapper">
        {key.length ? (
          <EditCardForm
            FileInput={FileInput}
            card={cards[key]}
            dropDown={dropDown}
            updateCard={updateCard}
          />
        )
        : (
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
