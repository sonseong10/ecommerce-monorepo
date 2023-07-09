import React, { memo } from 'react'
import styles from '../../../styles/modules/dropdown.module.css'

interface IDropDownProps {
  listItems: any
  handleEvent: any
  dark: any
}
const DropDown = memo(({ listItems, handleEvent, dark }: IDropDownProps) => {
  const onValueChange = (e: any) => {
    handleEvent(e.currentTarget.innerText)
  }

  return (
    <div>
      <ul className={`${styles.dropdownList} ${dark && styles.isDark}`}>
        {listItems.map((item: any) => {
          return (
            <li className={styles.listItem} key={item.id}>
              <button
                className={styles.listBtn}
                onClick={onValueChange}
                type="button"
              >
                {item.value}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
})

export default DropDown
