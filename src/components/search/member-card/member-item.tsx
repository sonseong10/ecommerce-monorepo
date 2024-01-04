import React from 'react'

import styles from '../../../styles/modules/member-card.module.css'
import DEFAULT_USER_IMG from '../../../assets/images/img-user-default.png'
import { Link } from 'react-router-dom'

interface IMemberItemProps {
  card?: {
    email: string
    fileName: string
    fileURL: string
    login: boolean
    msg: string
    name: string
    phone: string
    rank: string
    team: string
    telephone: string
    theme: string
  }
  uid: string
}
const MemberItem = ({ card, uid }: IMemberItemProps) => {
  const url = card?.fileURL || DEFAULT_USER_IMG
  return (
    <li className={styles.meberItem}>
      <Link to={'/detail'} state={{ id: uid }} className={styles.card}>
        <header className={styles.cardHeader}>
          <div
            className={`${styles.dot} 
              ${card?.login ? styles.online : styles.offline}`}
          ></div>
          <span>{card?.login ? 'online' : 'offline'}</span>
        </header>
        <div className={`${styles.cardContents} ${getStyles(card!.theme)}`}>
          <figure className={styles.profile}>
            <img src={url} alt="" />
            <figcaption className="visually-hidden">사용자 이미지</figcaption>
          </figure>
<<<<<<< HEAD:src/components/search/member-card/member-item.tsx
          <strong className={styles.authName}>{card?.name}</strong>
          <p className={styles.authMsg}>{card?.msg}</p>
=======
          <strong className={styles.authName}>{name}</strong>
          <p className={styles.authMsg}>{msg ? msg : '내용없음'}</p>
>>>>>>> 8cf8ee5 (내부스타일 수정):src/components/search/member-card/member-item.jsx
        </div>
        <footer className={styles.cardFooter}>
          <dl className={styles.authDetailList}>
            <div className={styles.authDetailItem}>
              <dt className={styles.title}>소속/직급</dt>
              <dd className={styles.description}>
                {card?.team}/{card?.rank}
              </dd>
            </div>
            <div className={styles.authDetailItem}>
              <dt className={styles.title}>휴대전화</dt>
              <dd className={styles.description}>{card?.phone}</dd>
            </div>
            <div className={styles.authDetailItem}>
              <dt className={styles.title}>유선전화</dt>
              <dd className={styles.description}>{card?.telephone}</dd>
            </div>
          </dl>
        </footer>
      </Link>
    </li>
  )
}

function getStyles(theme: string) {
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
