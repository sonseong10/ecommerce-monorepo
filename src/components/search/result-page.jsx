import React, { useEffect } from 'react'
import NotFound from '../errors/not-found'

const ResultPage = ({ handleSearchActive }) => {
  useEffect(() => {
    handleSearchActive()
  })

  return (
    <div className="col-sm-4 col-md-6">
      <div className="wrapper">
        <NotFound></NotFound>
      </div>
    </div>
  )
}

export default ResultPage
