import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AddCardForm from './add-card-form'

const Maker = ({
  FileInput,
  dropDown,
  isCard,
  createCard,
  onMenuChange,
  dark,
}) => {
  const history = useHistory()

  useEffect(() => {
    onMenuChange('home')
  })

  useEffect(() => {
    isCard && history.push('/main')
  })

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

export default Maker
