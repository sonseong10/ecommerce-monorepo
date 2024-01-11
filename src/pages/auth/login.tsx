import React from 'react'
import styles from 'styles/modules/login.module.css'
import btnStyles from 'styles/modules/buttons.module.css'
import Logo from 'assets/images/logo.svg'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import type AuthService from 'service/auth_service'

interface ILoginProps {
  onLogin: (e: React.MouseEvent<HTMLButtonElement>) => void
  authService?: AuthService
}

function Login({ onLogin }: ILoginProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div>
          <img src={Logo} alt="브랜드 로고" />
        </div>
        <div className={styles.form}>
          <h3>통합플랫폼 어드민</h3>
          <span>아이디</span>
          <input type="text" />
          <span>패스워드</span>
          <input type="password" />
          <button className={`${btnStyles.baseBtn} ${btnStyles.primaryBtn}`}>
            로그인
          </button>
          <div className={styles.easyLogin}>
            <span>테스터&방문자용 간편로그인</span>
            <div className={styles.buttonGroup}>
              <button
                className={`${btnStyles.baseBtn} ${styles.authBtn}`}
                type="button"
                onClick={onLogin}
                value="Google"
              >
                <FcGoogle className={styles.authLogo} />
                <span>Google</span>
              </button>
              <button
                className={`${btnStyles.baseBtn} ${styles.authBtn}`}
                type="button"
                onClick={onLogin}
                value="Github"
              >
                <FaGithub className={styles.authLogo} />
                <span>Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
