import React, { memo } from 'react'
import styles from '../../styles/modules/dropdown.module.css'

const DropdownItem = memo(({ value, handleEvent }) => {
  const onValueChange = (e) => {
    handleEvent(e.currentTarget.innerText)
  }
  return (
    <li className={styles.listItem}>
      <button className={styles.listBtn} onClick={onValueChange}>
        {value}
      </button>
    </li>
  )
})

export default DropdownItem
