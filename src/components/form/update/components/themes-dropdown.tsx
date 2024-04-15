import React, { useEffect, useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'

import buttonStyles from 'styles/modules/buttons.module.css'
import styles from 'styles/modules/dropdown.module.css'
import DropDownProps from 'utils/dropdown'
import type { ICardVo } from 'types/grobal-type'
import DropDown from 'components/common/dropdown/dropdown'

interface IThemesDropdownProps {
  dropDown: DropDownProps
  themeRef?: React.LegacyRef<HTMLButtonElement>
  userCard?: ICardVo
  updateCard?: (obj: ICardVo) => void
  dark: boolean
}

const ThemesDropdown = ({ dropDown, themeRef, updateCard, userCard, dark }: IThemesDropdownProps) => {
  const items = dropDown.getThemes()

  const [themesType, setThemesType] = useState('')
  const [themesIsOpen, setthemesIsOpen] = useState(false)

  const handleThemesValue = (value: string) => {
    userCard ? update(value) : add(value)
    onThemesOpen()
  }

  const add = (value: string) => {
    setThemesType(value)
  }

  const update = (value: string) => {
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
        <DropDown listItems={items} handleEvent={handleThemesValue} dark={dark} />
      </div>
    </div>
  )
}

export default React.memo(ThemesDropdown)
