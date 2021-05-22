import { useEffect } from 'react'
import styles from '../../styles/modules/home_page.module.css'

const HomePage = ({ handleHomeActive }) => {
  useEffect(() => {
    handleHomeActive()
  })
  return (
    <div className="col-sm-4 col-md-9">
      <div className={`wrapper ${styles.articleWrap}`}>
        <div className={styles.articleLeft}>
          <article className={styles.benner}>
            <h2 className={styles.articleTitle}>회사정보</h2>
          </article>
          <article className={styles.todo}>
            <h2 className={styles.articleTitle}>오늘할일</h2>
          </article>
        </div>
        <article className={styles.member}>
          <h2 className={styles.articleTitle}>팀원정보</h2>
        </article>
      </div>
    </div>
  )
}

export default HomePage
