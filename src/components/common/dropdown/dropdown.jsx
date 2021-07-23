import React, { memo } from 'react'
import styles from '../../../styles/modules/dropdown.module.css'

const DropDown = memo(({ listItems, handleEvent, dark }) => {
  const onValueChange = (e) => {
    handleEvent(e.currentTarget.innerText)
  }

  return (
    <div>
      <ul className={`${styles.dropdownList} ${dark && styles.isDark}`}>
        {listItems.map((item) => {
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
