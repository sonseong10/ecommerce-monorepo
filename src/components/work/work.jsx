import React, { useEffect } from 'react'

const Work = ({ onMenuChange }) => {
  useEffect(() => {
    onMenuChange('work')
  })
  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      <div className="wrapper">
        <h1>Work List</h1>
      </div>
    </div>
  )
}

export default Work
