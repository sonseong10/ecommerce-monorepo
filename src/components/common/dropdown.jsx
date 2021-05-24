import React, { memo } from 'react'
import styles from '../../styles/modules/dropdown.module.css'
import DropdownItem from './dropdown-item'

const DropDown = memo(({ listItems, handleEvent }) => {
  return (
    <div>
      <ul className={styles.dropdownList}>
        {listItems.map((item) => {
          return (
            <DropdownItem
              key={item.id}
              value={item.value}
              handleEvent={handleEvent}
            />
          )
        })}
      </ul>
    </div>
  )
})

export default DropDown
