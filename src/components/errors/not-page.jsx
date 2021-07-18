import React from 'react'
import notResult from '../../assets/images/page-not-found.svg'
import styles from '../../styles/modules/error_page.module.css'

const NotPage = () => {
  return (
    <div className="col-sm-4 col-md-9">
      <div className={styles.errorWrapper}>
        <section className={styles.error}>
          <img className={styles.errorImg} src={notResult} alt="Not result" />
          <h2 className={styles.errorTitle}>페이지를 찾지 못 했습니다.</h2>
          <p className={styles.errorDesc}>
            정확한 주소가 맞는지 확인 부탁 드립니다.
          </p>
        </section>
      </div>
    </div>
  )
}

export default NotPage
