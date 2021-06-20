import React, { memo, useRef, useState } from 'react'
import { BiArrowBack, BiTrash } from 'react-icons/bi'

import TeamsDropdown from '../common/dropdown/teams-dropdown'
import RanksDropdown from '../common/dropdown/ranks-dropdown'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/search_form.module.css'

const SearchForm = memo(({ onSearchOpen, dropDown }) => {
  const [valueCheck, setValueCheck] = useState(true)

  const inputName = useRef()

  const onValueCheck = () => {
    inputName.current.value ? setValueCheck(false) : setValueCheck(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const onRemove = () => {
    setValueCheck(true)
    inputName.current.value = ''
    inputName.current.focus()
  }

  return (
    <>
      <header className={styles.formHeader}>
        <button
          className={`${styles.formHideBtn} ${buttonStyles.baseBtn}`}
          onClick={onSearchOpen}
          type="button"
        >
          <BiArrowBack />
        </button>
        <button
          className={`${styles.resetBtn} ${buttonStyles.baseBtn}`}
          onClick={onRemove}
          type="reset"
        >
          <BiTrash className="lg-only" />
          Rmove All
        </button>
      </header>
      <form className={styles.from} onSubmit={handleSubmit}>
        <div className={styles.name}>
          <p className={styles.formLabel}>직원명</p>
          <input
            className={styles.formInput}
            type="text"
            autoComplete="off"
            placeholder="Anna"
            onChange={onValueCheck}
            ref={inputName}
          />
        </div>

        <TeamsDropdown dropDown={dropDown}></TeamsDropdown>

        <RanksDropdown dropDown={dropDown}></RanksDropdown>

        <button
          className={`${styles.formSubmit} ${buttonStyles.baseBtn} ${buttonStyles.primaryBtn}`}
          type="submit"
          disabled={valueCheck}
        >
          OK
        </button>
      </form>
      <footer className={styles.formFooter}>
        <p className={styles.formDesc}>
          정확한 검색을 위해 이름값은 <strong>필수</strong>로 입력 해 주세요.
        </p>
      </footer>
    </>
  )
})

export default SearchForm
