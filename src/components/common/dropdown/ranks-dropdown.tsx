import React, { memo, useEffect, useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'
import DropDown from './dropdown'
import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/dropdown.module.css'
import DropDownProps from 'utils/dropdown'

interface IRanksDropdownProps {
  dropDown: DropDownProps
  rankRef?: React.LegacyRef<HTMLButtonElement>
  userCard?: {
    email: string
    fileName: string
    fileURL: string
    login: true
    msg: string
    name: string
    phone: string
    rank: string
    team: string
    telephone: string
    theme: string
  }
  updateCard?: (obj: {
    email: string
    fileName: string
    fileURL: string
    login: true
    msg: string
    name: string
    phone: string
    rank: string
    team: string
    telephone: string
    theme: string
  }) => void
  dark: boolean
}

const RanksDropdown = memo(
  ({ dropDown, rankRef, userCard, updateCard, dark }: IRanksDropdownProps) => {
    const items = dropDown.getRanks()

    const [ranksType, setRanksType] = useState('')
    const [ranksIsOpen, setRanksIsOpen] = useState(false)

    const handleRanksValue = (value: any) => {
      userCard ? update(value) : add(value)
      onRanksOpen()
    }

    const add = (value: any) => {
      setRanksType(value)
    }

    const update = (value: any) => {
      setRanksType(value)
      if (updateCard) {
        updateCard({
          ...userCard!,
          [`rank`]: value,
        })
      }
    }

    const onRanksOpen = () => {
      setRanksIsOpen(!ranksIsOpen)
    }

    useEffect(() => {
      userCard ? setRanksType(userCard.rank) : setRanksType(items[0].value)
    }, [items, userCard])

    return (
      <div
        className={`${styles.ranks} 
      ${ranksIsOpen && styles.isActive} 
      ${dark && styles.isDark}`}
      >
        <p className={styles.formLabel}>직급명</p>

        <button
          className={`${styles.formInput} ${buttonStyles.baseBtn}`}
          onClick={onRanksOpen}
          type="button"
          ref={rankRef}
        >
          {ranksType}{' '}
          <BiChevronUp className={styles.dropdownIcon} aria-hidden />
        </button>

        <div className={styles.ranksList}>
          <DropDown
            listItems={items}
            handleEvent={handleRanksValue}
            dark={dark}
          />
        </div>
      </div>
    )
  }
)

export default RanksDropdown
