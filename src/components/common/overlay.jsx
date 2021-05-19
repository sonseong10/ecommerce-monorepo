import React from 'react'
import styles from '../../styles/modules/common.module.css'

const Overlay = ({ overlay, handleOpenPopup }) => {
  const getState = overlay === 'close' ? '' : styles.isActive

  return (
    <div
      className={`${styles.overlay} ${getState}`}
      onClick={handleOpenPopup}
      aria-hidden
    ></div>
  )
}

export default Overlay
