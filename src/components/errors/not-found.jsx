import React from 'react'
import notResult from '../../assets/images/people-search.svg'
import styles from '../../styles/modules/not_found.module.css'

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <img className={styles.notFoundImg} src={notResult} alt="Not result" />
      <h2 className={styles.notFoundTitle}>결과가 없습니다.</h2>
      <p className={styles.notFoundDesc}>
        검색 오류 또는 찾는 직원 정보가 없습니다.
      </p>
    </section>
  )
}

export default NotFound
