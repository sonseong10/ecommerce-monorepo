import React, { memo, useEffect, useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'

import DropDown from './dropdown'

import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/dropdown.module.css'
import DropDownProps from 'utils/dropdown'

interface IThemesDropdownProps {
  dropDown: DropDownProps
  themeRef?: React.LegacyRef<HTMLButtonElement>
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
const ThemesDropdown = memo(
  ({
    dropDown,
    themeRef,
    updateCard,
    userCard,
    dark,
  }: IThemesDropdownProps) => {
    const items = dropDown.getThemes()

    const [themesType, setThemesType] = useState('')
    const [themesIsOpen, setthemesIsOpen] = useState(false)

    const handleThemesValue = (value: any) => {
      userCard ? update(value) : add(value)
      onThemesOpen()
    }

    const add = (value: any) => {
      setThemesType(value)
    }

    const update = (value: any) => {
      setThemesType(value)
      if (updateCard) {
        updateCard({
          ...userCard!,
          [`theme`]: value,
        })
      }
    }

    const onThemesOpen = () => {
      setthemesIsOpen(!themesIsOpen)
    }

    useEffect(() => {
      userCard ? setThemesType(userCard.theme) : setThemesType(items[0].value)
    }, [items, userCard])

    return (
      <div
        className={`${styles.themes} 
      ${themesIsOpen && styles.isActive}
      ${dark && styles.isDark}`}
      >
        <p className={styles.formLabel}>색상 테마</p>
        <button
          className={`${styles.formInput} ${buttonStyles.baseBtn}`}
          onClick={onThemesOpen}
          type="button"
          ref={themeRef}
        >
          {themesType}
          <BiChevronUp className={styles.dropdownIcon} aria-hidden />
        </button>
        <div className={styles.themesList}>
          <DropDown
            listItems={dropDown.getThemes()}
            handleEvent={handleThemesValue}
            dark={dark}
          />
        </div>
      </div>
    )
  }
)

export default ThemesDropdown
