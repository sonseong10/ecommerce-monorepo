import React from 'react'
import styles from 'styles/modules/login.module.css'
import btnStyles from 'styles/modules/buttons.module.css'
import Logo from 'assets/images/logo.svg'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Button from 'components/ui/Button'
import { useAuth } from './authHook'

function BaiscUserLoginForm() {
  return (
    <>
      <h3>통합플랫폼 어드민</h3>
      <span>아이디</span>
      <input type="text" />
      <span>패스워드</span>
      <input type="password" />
      <Button text="로그인" color="primary" />
    </>
  )
}

function EasyLoginForm() {
  const { onLogin } = useAuth()
  return (
    <div className={styles.easyLogin}>
      <span>테스터&방문자용 간편로그인</span>
      <div className={styles.buttonGroup}>
        <div>
          <FcGoogle className={styles.authLogo} />
          <Button
            className={`${btnStyles.baseBtn} ${styles.authBtn}`}
            type="button"
            btnType="ghost"
            onClick={() => onLogin('Google')}
            text="Google"
          ></Button>
        </div>

        <div>
          <FaGithub className={styles.authLogo} />
          <Button
            className={`${btnStyles.baseBtn} ${styles.authBtn}`}
            type="button"
            btnType="ghost"
            onClick={() => onLogin('Github')}
            value="Github"
            text="Github"
          ></Button>
        </div>
      </div>
    </div>
  )
}

function Login(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div>
          <img src={Logo} alt="브랜드 로고" />
        </div>
        <div className={styles.form}>
          <BaiscUserLoginForm />

          <EasyLoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
