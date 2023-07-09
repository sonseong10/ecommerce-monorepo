import React, { memo } from 'react'

import { FcGoogle } from 'react-icons/fc'
// import { GoMarkGithub } from 'react-icons/go'

import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/common.module.css'

interface IAuthPopupProps {
  authPopup: any
  ToggleOverlay: any
  onLogin: any
  authService: any
}

const AuthPopup = memo(
  ({ authPopup, ToggleOverlay, onLogin }: IAuthPopupProps) => {
    return (
      <section
        className={`${styles.authPopup} ${authPopup && styles.isActive}`}
      >
        <header className={styles.popupHeader}>
          <h2 className={styles.popupTitle}>Join us</h2>
        </header>

        <div className={styles.popupBody}>
          <button
            className={`${buttonStyles.baseBtn} ${styles.authBtn}`}
            type="button"
            onClick={onLogin}
            onMouseDown={ToggleOverlay}
            value="Google"
          >
            <FcGoogle className={styles.authLogo} />
            Start for Google
          </button>
          <button
            className={`${buttonStyles.baseBtn} ${styles.authBtn}`}
            type="button"
            onClick={onLogin}
            onMouseDown={ToggleOverlay}
            value="Github"
          >
            {/* <GoMarkGithub className={styles.authLogo} /> */}
            Start for Github
          </button>
        </div>

        <footer className={styles.popupFooter}>
          <button
            className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.cancleBtn}`}
            onClick={ToggleOverlay}
            type="button"
          >
            Cancle
          </button>
        </footer>
      </section>
    )
  }
)

export default AuthPopup
