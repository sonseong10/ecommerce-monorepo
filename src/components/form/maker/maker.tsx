import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddCardForm from './add-card-form'

interface IMakerProps {
  FileInput: any
  dropDown: any
  isCard: any
  createCard: any
  onMenuChange: any
  dark: any
}
const Maker = memo(
  ({
    FileInput,
    dropDown,
    isCard,
    createCard,
    onMenuChange,
    dark,
  }: IMakerProps) => {
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
