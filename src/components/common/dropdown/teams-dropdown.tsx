import React, { memo, useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'

import DropDown from './dropdown'

import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/dropdown.module.css'

interface ITeamsDropdownProps {
  dropDown: any
  teamRef?: any
  userCard?: any
  updateCard?: any
  dark: any
}
const TeamsDropdown = memo(
  ({ dropDown, teamRef, userCard, updateCard, dark }: ITeamsDropdownProps) => {
    const items = [...dropDown.getTeams()]
    const [teamsType, setTeamsType] = useState(
      userCard ? userCard.team : items[0].value
    )
    const [teamsIsOpen, setTeamsIsOpen] = useState(false)

    const handleTeamsValue = (value: any) => {
      userCard ? update(value) : add(value)
      onTeamsOpen()
    }

    const add = (value: any) => {
      setTeamsType(value)
    }

    const update = (value: any) => {
      setTeamsType(value)
      updateCard({
        ...userCard,
        [`team`]: value,
      })
    }

    const onTeamsOpen = () => {
      setTeamsIsOpen(!teamsIsOpen)
    }

    return (
      <div
        className={`${styles.teams} 
      ${teamsIsOpen && styles.isActive} 
      ${dark && styles.isDark}`}
      >
        <p className={styles.formLabel}>부서명</p>
        <button
          className={`${styles.formInput} ${buttonStyles.baseBtn}`}
          onClick={onTeamsOpen}
          type="button"
          ref={teamRef}
        >
          {teamsType}{' '}
          <BiChevronUp className={styles.dropdownIcon} aria-hidden />
        </button>
        <div className={styles.teamsList}>
          <DropDown
            listItems={items}
            handleEvent={handleTeamsValue}
            dark={dark}
          />
        </div>
      </div>
    )
  }
)

export default TeamsDropdown
