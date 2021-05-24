import React, { memo, useEffect, useRef, useState } from 'react'
import { BiArrowBack, BiTrash, BiChevronUp } from 'react-icons/bi'
import styles from '../../styles/modules/search_form.module.css'
import buttonStyles from '../../styles/modules/buttons.module.css'
import DropDown from '../common/dropdown'

const SearchForm = memo(({ onSearchOpen }) => {
  const [teams, setTeams] = useState([])
  const [ranks, setRanks] = useState([])
  const [teamsIsOpen, setTeamsIsOpen] = useState(false)
  const [ranksIsOpen, setRanksIsOpen] = useState(false)
  const [valueCheck, setValueCheck] = useState(true)
  const [teamsType, setTeamsType] = useState('전체')
  const [ranksType, setRanksType] = useState('전체')

  const inputName = useRef()

  const onValueCheck = () => {
    inputName.current.value ? setValueCheck(false) : setValueCheck(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const onTeamsOpen = () => {
    setTeamsIsOpen(!teamsIsOpen)
  }

  const onRanksOpen = () => {
    setRanksIsOpen(!ranksIsOpen)
  }

  const handleTeamsValue = (value) => {
    onTeamsOpen()
    setTeamsType(value)
  }

  const handleRanksValue = (value) => {
    onRanksOpen()
    setRanksType(value)
  }

  const onRemoveAll = () => {
    setValueCheck(true)
    setTeamsType('전체')
    setRanksType('전체')
    inputName.current.value = ''
    inputName.current.focus()
  }

  useEffect(() => {
    const teamsValue = [
      { id: 1, value: '전체' },
      { id: 2, value: '인사' },
      { id: 3, value: '회계' },
      { id: 4, value: '개발' },
      { id: 5, value: '영업' },
      { id: 6, value: '기획' },
      { id: 7, value: '디자인' },
    ]
    return setTeams(teamsValue)
  }, [])

  useEffect(() => {
    const ranksValue = [
      { id: 1, value: '전체' },
      { id: 2, value: '부장' },
      { id: 3, value: '차장' },
      { id: 4, value: '과장' },
      { id: 5, value: '대리' },
      { id: 6, value: '직원' },
    ]
    return setRanks(ranksValue)
  }, [])

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
          onClick={onRemoveAll}
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

        <div className={`${styles.teams} ${teamsIsOpen && styles.isActive}`}>
          <p className={styles.formLabel}>부서명</p>
          <button
            className={`${styles.formInput} ${buttonStyles.baseBtn}`}
            onClick={onTeamsOpen}
            type="button"
          >
            {teamsType} <BiChevronUp className={styles.dropdownIcon} />
          </button>
          <div className={styles.teamsList}>
            <DropDown listItems={teams} handleEvent={handleTeamsValue} />
          </div>
        </div>

        <div className={`${styles.ranks} ${ranksIsOpen && styles.isActive}`}>
          <p className={styles.formLabel}>직급명</p>

          <button
            className={`${styles.formInput} ${buttonStyles.baseBtn}`}
            onClick={onRanksOpen}
            type="button"
          >
            {ranksType}
            <BiChevronUp className={styles.dropdownIcon} />
          </button>

          <div className={styles.ranksList}>
            <DropDown listItems={ranks} handleEvent={handleRanksValue} />
          </div>
        </div>

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
