import React from 'react'
import styles from '../../styles/modules/common.module.css'

const Overlay = ({ overlay, ToggleOverlay }) => {
  return (
    <div
      className={`${styles.overlay} ${overlay && styles.isActive}`}
      onClick={ToggleOverlay}
      aria-hidden
    ></div>
  )
}

export default Overlay
