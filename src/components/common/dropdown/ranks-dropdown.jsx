import React, { useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'

import DropDown from './dropdown'

import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/dropdown.module.css'

const RanksDropdown = ({ dropDown, rankRef, userCard, updateCard }) => {
  const items = dropDown.getRanks()

  const [ranksType, setRanksType] = useState(
    userCard ? userCard.rank : items[0].value
  )
  const [ranksIsOpen, setRanksIsOpen] = useState(false)

  const handleRanksValue = (value) => {
    userCard ? update(value) : add(value)
    onRanksOpen()
  }

  const add = (value) => {
    setRanksType(value)
  }

  const update = (value) => {
    setRanksType(value)
    updateCard({
      ...userCard,
      [`rank`]: value,
    })
  }

  const onRanksOpen = () => {
    setRanksIsOpen(!ranksIsOpen)
  }

  return (
    <div className={`${styles.ranks} ${ranksIsOpen && styles.isActive}`}>
      <p className={styles.formLabel}>직급명</p>

      <button
        className={`${styles.formInput} ${buttonStyles.baseBtn}`}
        onClick={onRanksOpen}
        type="button"
        ref={rankRef}
      >
        {ranksType} <BiChevronUp className={styles.dropdownIcon} />
      </button>

      <div className={styles.ranksList}>
        <DropDown listItems={items} handleEvent={handleRanksValue} />
      </div>
    </div>
  )
}

export default RanksDropdown
