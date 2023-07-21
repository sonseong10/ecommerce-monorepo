import React, { memo } from 'react'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/common.module.css'
import type AuthService from 'service/auth_service'

interface IAuthPopupProps {
  authPopup: boolean
  ToggleOverlay: () => void
  onLogin: (e: React.MouseEvent<HTMLButtonElement>) => void
  authService?: AuthService
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
            <FaGithub className={styles.authLogo} />
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
