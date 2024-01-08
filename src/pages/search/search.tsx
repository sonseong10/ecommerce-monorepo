import React, { useEffect, useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

import styles from '../../styles/modules/search.module.css'
import MemberList from './member-card/member-list'
import type DropDown from 'utils/dropdown'

interface ISearchProps {
  cards:
    | {
        [key: string]: {
          email: string
          fileName: string
          fileURL: string
          login: boolean
          msg: string
          name: string
          phone: string
          rank: string
          team: string
          telephone: string
          theme: string
        }
      }
    | undefined
  onMenuChange: (v: 'search' | 'work' | 'home') => void
  dark: boolean
  dropDown?: DropDown
}

const Search = ({ cards, onMenuChange, dark }: ISearchProps) => {
  const searchRef = useRef<HTMLInputElement>(null)
  const [searchValue, setSerchValue] = useState<string | undefined>(undefined)

  useEffect(() => {
    onMenuChange('search')
  })

  const onSearchValue = () => {
    setSerchValue(searchRef.current?.value)
  }

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      <div className={`${styles.memberGroup} ${dark && styles.isDark}`}>
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
        <MemberList
          cards={cards}
          searchValue={searchValue}
          dark={dark}
        ></MemberList>
      </div>
    </div>
  )
}

export default Search
