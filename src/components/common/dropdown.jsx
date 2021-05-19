import React from 'react'
import styles from '../../styles/modules/dropdown.module.css'
import DropdownItem from './dropdown-item'

const DropDown = ({ listItems }) => {
  return (
    <ul className={styles.dropdownList}>
      {listItems.map((item) => {
        // return console.log(item)
        return <DropdownItem key={item.id} value={item.value} />
      })}
    </ul>
  )
}

export default DropDown
