import React from 'react'
import styles from '../../styles/modules/common.module.css'

const LodingSpinner = ({ dark }) => {
  return (
    <div className={`${styles.lodingBackGround} ${dark && styles.isDark}`}>
      <div className={`${styles.lodingMiddle}`}></div>
    </div>
  )
}

export default LodingSpinner
