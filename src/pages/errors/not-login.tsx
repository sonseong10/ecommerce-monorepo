import React from 'react'
import notResult from '../../assets/images/security-on.svg'
import styles from '../../styles/modules/error-page.module.css'

interface INotLoginProps {
  loding: boolean
  dark: boolean
}

const NotLogin = ({ dark }: INotLoginProps) => {
  return (
    <div className="col-sm-4 col-md-12">
      <div className={`${styles.error} ${dark && styles.isDark}`}>
        <section className={styles.error}>
          <img className={styles.errorImg} src={notResult} alt="Not result" />
          <h2 className={styles.errorTitle}>로그인 정보가 필요합니다.</h2>
          <p className={styles.errorDesc}>보다 많은 서비스 사용을 위해 로그인 먼저 진행해 주세요.</p>
        </section>
      </div>
    </div>
  )
}

export default React.memo(NotLogin)
