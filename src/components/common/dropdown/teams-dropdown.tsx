import React, { memo, useEffect, useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'

import DropDown from './dropdown'

import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/dropdown.module.css'
import DropDownProps from 'utils/dropdown'
import type { ICardVo } from 'types/grobal-type'

interface ITeamsDropdownProps {
  dropDown: DropDownProps
  teamRef?: React.LegacyRef<HTMLButtonElement>
  userCard?: ICardVo
  updateCard?: (obj: ICardVo) => void
  dark: boolean
}

const TeamsDropdown = memo(
  ({ dropDown, teamRef, userCard, updateCard, dark }: ITeamsDropdownProps) => {
    const items = dropDown.getTeams()

    const [teamsType, setTeamsType] = useState('')
    const [teamsIsOpen, setTeamsIsOpen] = useState(false)

    const handleTeamsValue = (value: string) => {
      userCard ? update(value) : add(value)
      onTeamsOpen()
    }

    const add = (value: string) => {
      setTeamsType(value)
    }

    const update = (value: string) => {
      setTeamsType(value)
      if (updateCard) {
        updateCard({
          ...userCard!,
          [`team`]: value,
        })
      }
    }

    const onTeamsOpen = () => {
      setTeamsIsOpen(!teamsIsOpen)
    }

    useEffect(() => {
      userCard ? setTeamsType(userCard.team) : setTeamsType(items[0].value)
    }, [items, userCard])
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
