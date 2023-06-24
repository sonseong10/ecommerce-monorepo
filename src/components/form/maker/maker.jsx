import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddCardForm from './add-card-form'

const Maker = memo(
  ({ FileInput, dropDown, isCard, createCard, onMenuChange, dark }) => {
    const navigate = useNavigate()

    useEffect(() => {
      onMenuChange('home')
    }, [onMenuChange])

    useEffect(() => {
      isCard && navigate('/main')
    }, [isCard, navigate])

    return (
      <div className="col-sm-4 col-md-10 col-lg-9">
        <AddCardForm
          FileInput={FileInput}
          createCard={createCard}
          dropDown={dropDown}
          dark={dark}
        />
      </div>
    )
  }
)

export default Maker
