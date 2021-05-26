import React, { useEffect } from 'react'
// import NotFound from '../errors/not-found'
import MemberList from '../member-card/member-list'

const ResultPage = ({ handleSearchActive, searchIsOpen }) => {
  const layout = searchIsOpen ? 'col-md-6' : 'col-md-9'

  useEffect(() => {
    handleSearchActive()
  })

  return (
    <div className={`col-sm-4 ${layout}`}>
      <div className="wrapper">
        <MemberList></MemberList>
        {/* 결과가 없는 경우 */}
        {/* <NotFound></NotFound> */}
      </div>
    </div>
  )
}

export default ResultPage
