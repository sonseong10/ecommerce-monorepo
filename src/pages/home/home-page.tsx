import React from 'react'
import styles from '../../styles/modules/home-page.module.css'

const HomePage = () => {
  return (
    <>
      <div className={`${styles.articleGroup}`}>
        <div className={styles.articleLeft}>
          <article className={`${styles.work}`}>
            {/* <div className={styles.articleTitle}>
              <h2>작업중인 업무</h2>
              <strong>{works && Object.keys(works).length}</strong>
            </div> */}
            {/* <WorkLinkList works={works} dark={dark}></WorkLinkList> */}
          </article>

          <div>운영중인 서비스 바로가기</div>
        </div>

        <article className={styles.member}>
          <div className={styles.articleTitle}>
            <h2>팀원</h2>
          </div>
        </article>
      </div>
    </>
  )
}

export default HomePage
