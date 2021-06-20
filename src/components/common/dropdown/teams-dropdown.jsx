import React, { useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'

import DropDown from './dropdown'

import styles from '../../../styles/modules/dropdown.module.css'
import buttonStyles from '../../../styles/modules/buttons.module.css'
import formStyles from '../../../styles/modules/search_form.module.css'

const TeamsDropdown = ({ dropDown, teamRef }) => {
  const [teamsType, setTeamsType] = useState('인사')
  const [teamsIsOpen, setTeamsIsOpen] = useState(false)

  const handleTeamsValue = (value) => {
    onTeamsOpen()
    setTeamsType(value)
  }

  const onTeamsOpen = () => {
    setTeamsIsOpen(!teamsIsOpen)
  }

  return (
    <div className={`${styles.teams} ${teamsIsOpen && styles.isActive}`}>
      <p className={formStyles.formLabel}>부서명</p>
      <button
        className={`${formStyles.formInput} ${buttonStyles.baseBtn}`}
        onClick={onTeamsOpen}
        type="button"
        ref={teamRef}
      >
        {teamsType} <BiChevronUp className={styles.dropdownIcon} />
      </button>
      <div className={styles.teamsList}>
        <DropDown
          listItems={dropDown.getTeams()}
          handleEvent={handleTeamsValue}
        />
      </div>
    </div>
  )
}

export default TeamsDropdown
