import React from 'react'

import styles from '../../styles/modules/member_card.module.css'

const MemberList = () => {
  return (
    <div className={styles.temp}>
      <ul className={styles.memberList}>
        <li className={styles.meberItem}>
          <article className={styles.card}>
            <h2 className="visually-hidden">Member Card</h2>
            <header className={styles.cardHeader}>
              <div className={styles.dot}>
                <span className="visually-hidden">online</span>
              </div>
              <span className={styles.loginTime}>10:00</span>
            </header>
            <div className={styles.cardContents}>
              <figure className={styles.profile}>
                <img src="" alt="" />
                <figcaption className="visually-hidden">
                  사용자 이미지
                </figcaption>
              </figure>
              <strong className={styles.authName}>사용자명</strong>
              <p className={styles.authMsg}>오늘도 힘찬 하루!</p>
            </div>
            <footer className={styles.cardFooter}>
              <dl className={styles.authDetailList}>
                <div className={styles.authDetailItem}>
                  <dt className={styles.title}>소속</dt>
                  <dd className={styles.description}>FE Dev</dd>
                </div>
                <div className={styles.authDetailItem}>
                  <dt className={styles.title}>휴대전화</dt>
                  <dd className={styles.description}>010-1234-5678</dd>
                </div>
                <div className={styles.authDetailItem}>
                  <dt className={styles.title}>유선전화</dt>
                  <dd className={styles.description}>9101</dd>
                </div>
              </dl>
            </footer>
          </article>
        </li>
      </ul>
    </div>
  )
}

export default MemberList
