import React, { memo } from 'react'

import { FcGoogle } from 'react-icons/fc'
import { GoMarkGithub } from 'react-icons/go'

import styles from '../../styles/modules/common.module.css'
import buttonStyles from '../../styles/modules/buttons.module.css'
import { useHistory } from 'react-router-dom'

const AuthPopup = memo(({ overlay, handleOpenPopup, authService }) => {
  const history = useHistory()
  const getState = overlay === 'close' ? '' : styles.isActive

  const onLogin = (event) => {
    authService //
      .login(event.target.value)
    history.push('/')
  }

  return (
    <section className={`${styles.authPopup} ${getState}`}>
      <header className={styles.popupHeader}>
        <h2 className={styles.popupTitle}>Join us</h2>
      </header>

      <div className={styles.popupBody}>
        <button
          className={`${buttonStyles.baseBtn} ${styles.authBtn}`}
          type="button"
          onClick={onLogin}
          onMouseDown={handleOpenPopup}
          value="Google"
        >
          <FcGoogle className={styles.authLogo} />
          Start for Google
        </button>
        <button
          className={`${buttonStyles.baseBtn} ${styles.authBtn}`}
          type="button"
          onClick={onLogin}
          onMouseDown={handleOpenPopup}
          value="Github"
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
})

export default AuthPopup
