import React from 'react'

import styles from '../../../styles/modules/member_card.module.css'
import DEFAULT_USER_IMG from '../../../assets/images/img-user-default.png'
import { Link } from 'react-router-dom'

const MemberItem = ({ card, uid }) => {
  const { name, login, theme, msg, phone, telephone, team, rank, fileURL } =
    card
  const url = fileURL || DEFAULT_USER_IMG
  return (
    <li className={styles.meberItem}>
      <Link
        to={{ pathname: '/detail', state: { id: uid } }}
        className={styles.card}
      >
        <header className={styles.cardHeader}>
          <>
            <div
              className={`${styles.dot} 
              ${login ? styles.online : styles.offline}`}
            ></div>
            <span>{login ? 'online' : 'offline'}</span>
          </>
        </header>
        <div className={`${styles.cardContents} ${getStyles(theme)}`}>
          <figure className={styles.profile}>
            <img src={url} alt="" />
            <figcaption className="visually-hidden">사용자 이미지</figcaption>
          </figure>
          <strong className={styles.authName}>{name}</strong>
          <p className={styles.authMsg}>{msg}</p>
        </div>
        <footer className={styles.cardFooter}>
          <dl className={styles.authDetailList}>
            <div className={styles.authDetailItem}>
              <dt className={styles.title}>소속/직급</dt>
              <dd className={styles.description}>
                {team}/{rank}
              </dd>
            </div>
            <div className={styles.authDetailItem}>
              <dt className={styles.title}>휴대전화</dt>
              <dd className={styles.description}>{phone}</dd>
            </div>
            <div className={styles.authDetailItem}>
              <dt className={styles.title}>유선전화</dt>
              <dd className={styles.description}>{telephone}</dd>
            </div>
          </dl>
        </footer>
      </Link>
    </li>
  )
}

function getStyles(theme) {
  switch (theme) {
    case 'Gray':
      return styles.isGray
    case 'Yellow':
      return styles.isYellow
    case 'Blue':
      return styles.isBlue
    default:
      throw new Error(`unknown theme: ${theme}`)
  }
}

export default MemberItem
