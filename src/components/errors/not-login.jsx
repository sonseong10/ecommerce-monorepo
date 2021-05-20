import React from 'react'
import notResult from '../../assets/images/security_on.svg'
import styles from '../../styles/modules/error_page.module.css'

const NotLogin = () => {
  return (
    <div className="col-sm-4 col-md-9">
      <div className="wrapper">
        <section className={styles.error}>
          <img className={styles.errorImg} src={notResult} alt="Not result" />
          <h2 className={styles.errorTitle}>로그인 정보가 필요합니다.</h2>
          <p className={styles.errorDesc}>
            보다 많은 서비스 사용을 위해 로그인 먼저 진행해 주세요.
          </p>
        </section>
      </div>
    </div>
  )
}

export default NotLogin
