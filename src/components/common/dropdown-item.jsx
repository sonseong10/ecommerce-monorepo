import React from 'react'
import styles from '../../styles/modules/dropdown.module.css'

const DropdownItem = ({ value }) => {
  return (
    <li className={styles.listItem}>
      <button className={styles.listBtn}>{value}</button>
    </li>
  )
}

export default DropdownItem
