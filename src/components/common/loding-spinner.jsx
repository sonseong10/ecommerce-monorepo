import React from 'react'
import styles from '../../styles/modules/common.module.css'

const LodingSpinner = () => {
  return (
    <div className={`${styles.lodingBackGround}`}>
      <div className={`${styles.lodingMiddle}`}></div>
    </div>
  )
}

export default LodingSpinner
