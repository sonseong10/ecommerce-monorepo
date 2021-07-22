import React from 'react'
import { BiHeartCircle } from 'react-icons/bi'

import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/common.module.css'

const MsgPopup = ({ popupMsg, isOpenPopup, toggleMsgPopup }) => {
  return (
    <section className={`${styles.msgPopup} ${isOpenPopup && styles.isActive}`}>
      <header className={styles.popupHeader}>
        <BiHeartCircle />
      </header>

      <div className={styles.popupBody}>
        <h2 className={styles.title}>{popupMsg.title}</h2>
        <p className={styles.desc}>{popupMsg.desc}</p>
      </div>

      <footer className={styles.popupFooter}>
        <button
          className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.closeBtn}`}
          onClick={toggleMsgPopup}
          type="button"
        >
          Close
        </button>
      </footer>
    </section>
  )
}

export default MsgPopup
