import React, { useEffect, useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

import styles from '../../styles/modules/search.module.css'
import MemberList from '../member-card/member-list'

const Search = ({ cards, onMenuChange }) => {
  const searchRef = useRef()
  const [searchValue, setSerchValue] = useState()

  useEffect(() => {
    onMenuChange('search')
  })

  const onSearchValue = () => {
    setSerchValue(searchRef.current.value)
  }

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      <div className={styles.memberGroup}>
        <header className={styles.header}>
          <div className={styles.serchInput}>
            <BiSearch aria-hidden />
            <input
              type="text"
              placeholder="직원이름 검색"
              ref={searchRef}
              onChange={onSearchValue}
            />
          </div>
        </header>
        <MemberList cards={cards} searchValue={searchValue}></MemberList>
      </div>
    </div>
  )
}

export default Search
