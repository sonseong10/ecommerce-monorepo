import React from 'react'

import { FcGoogle } from 'react-icons/fc'
import { GoMarkGithub } from 'react-icons/go'

import styles from '../../styles/modules/common.module.css'
import buttonStyles from '../../styles/modules/buttons.module.css'

const AuthPopup = ({ overlay, handleOpenPopup }) => {
  const getState = overlay === 'close' ? '' : styles.isActive

  return (
    <section className={`${styles.authPopup} ${getState}`}>
      <header className={styles.popupHeader}>
        <h2 className={styles.popupTitle}>Join us</h2>
      </header>

      <div className={styles.popupBody}>
        <button
          className={`${buttonStyles.baseBtn} ${styles.authBtn}`}
          type="button"
        >
          <FcGoogle className={styles.authLogo} />
          Start for Google
        </button>
        <button
          className={`${buttonStyles.baseBtn} ${styles.authBtn}`}
          type="button"
        >
          <GoMarkGithub className={styles.authLogo} />
          Start for Github
        </button>
      </div>

      <footer className={styles.popupFooter}>
        <button
          className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.cancleBtn}`}
          onClick={handleOpenPopup}
          type="button"
        >
          Cancle
        </button>
      </footer>
    </section>
  )
}

export default AuthPopup
