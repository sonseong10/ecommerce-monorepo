import React from 'react'
import styles from '../../styles/modules/common.module.css'

const LodingSpinner = ({ dark }) => {
  return (
    <div className={`${styles.lodingBackGround} ${dark && styles.isDark}`}>
      <div className={`${styles.lodingMiddle}`}>
        <span className="visually-hidden">로딩중</span>
      </div>
    </div>
  )
}

export default LodingSpinner
