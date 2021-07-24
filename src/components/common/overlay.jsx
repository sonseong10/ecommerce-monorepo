import React, { memo } from 'react'
import styles from '../../styles/modules/common.module.css'

const Overlay = memo(({ overlay, ToggleOverlay }) => {
  return (
    <div
      className={`${styles.overlay} ${overlay && styles.isActive}`}
      onClick={ToggleOverlay}
      onBlur={ToggleOverlay}
      aria-hidden
    ></div>
  )
})

export default Overlay
