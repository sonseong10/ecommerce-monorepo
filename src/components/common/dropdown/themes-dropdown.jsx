import React, { useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'

import DropDown from './dropdown'

import styles from '../../../styles/modules/dropdown.module.css'
import buttonStyles from '../../../styles/modules/buttons.module.css'
import formStyles from '../../../styles/modules/search_form.module.css'

const ThemesDropdown = ({ dropDown, themeRef, updateCard, userCard }) => {
  const items = dropDown.getThemes()

  const [themesType, setThemesType] = useState(
    userCard ? userCard.theme : items[0].value
  )
  const [themesIsOpen, setthemesIsOpen] = useState(false)

  const handleThemesValue = (value) => {
    userCard ? update(value) : add(value)
    onThemesOpen()
  }

  const add = (value) => {
    setThemesType(value)
  }

  const update = (value) => {
    setThemesType(value)
    updateCard({
      ...userCard,
      [`theme`]: value,
    })
  }

  const onThemesOpen = () => {
    setthemesIsOpen(!themesIsOpen)
  }

  return (
    <div className={`${styles.themes} ${themesIsOpen && styles.isActive}`}>
      <p className={formStyles.formLabel}>색상 테마</p>
      <button
        className={`${formStyles.formInput} ${buttonStyles.baseBtn}`}
        onClick={onThemesOpen}
        type="button"
        ref={themeRef}
      >
        {themesType} <BiChevronUp className={styles.dropdownIcon} />
      </button>
      <div className={styles.themesList}>
        <DropDown
          listItems={dropDown.getThemes()}
          handleEvent={handleThemesValue}
        />
      </div>
    </div>
  )
}

export default ThemesDropdown
