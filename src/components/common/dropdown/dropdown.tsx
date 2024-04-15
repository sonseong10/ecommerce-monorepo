import React from 'react'
import styles from '../../../styles/modules/dropdown.module.css'

interface IDropDownProps {
  listItems: { id: number; value: string }[]
  handleEvent: (v: string) => void
  dark: boolean
}

const DropDown = ({ listItems, handleEvent, dark }: IDropDownProps) => {
  const onValueChange = (id: number) => {
    handleEvent(listItems.find(i => i.id === id)!.value)
  }

  return (
    <ul className={`${styles.dropdownList} ${dark && styles.isDark}`}>
      {listItems.map(item => {
        return (
          <li className={styles.listItem} key={item.id}>
            <button className={styles.listBtn} onClick={onValueChange.bind(null, item.id)} type="button">
              {item.value}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default React.memo(DropDown)
