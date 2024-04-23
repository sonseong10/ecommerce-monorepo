import React from 'react'

import styles from '../../../styles/modules/member-card.module.css'
import DEFAULT_USER_IMG from '../../../assets/images/img-user-default.png'
import { Link } from 'react-router-dom'
import type { ICardVo } from 'types/grobal-type'

interface IMemberItemProps {
  card?: ICardVo
  uid: string
}

const MemberItem = ({ card, uid }: IMemberItemProps) => {
  const url = card?.fileURL || DEFAULT_USER_IMG
  return (
    <li className={styles.meberItem}>
      <Link to={'/admin/detail'} state={{ id: uid }} className={styles.card}>
        <div className={`${styles.cardContents} ${getStyles(card!.theme)}`}>
          <figure className={styles.profile}>
            <img src={url} alt="" />
            <figcaption className="visually-hidden">사용자 이미지</figcaption>
          </figure>
          <div
            className={`${styles.dot} 
              ${card?.login ? styles.online : styles.offline}`}
            title={card?.login ? 'online' : 'offline'}
          ></div>
          <span className="visually-hidden">{card?.login ? 'online' : 'offline'}</span>
        </div>
        <div>
          <strong className={styles.authName}>{card!.name}</strong>
          <p className={styles.authMsg}>{card!.msg ? card!.msg : '내용없음'}</p>
        </div>
        <div className={styles.cardFooter}>
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
        </div>
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
