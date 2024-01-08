import React from 'react'

import DEFAULT_USER_IMG from '../../../assets/images/img-user-default.png'

import styles from '../../../styles/modules/team-card.module.css'

interface ITeamItemProps {
  card:
    | {
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
    | undefined
}
const TeamItem = ({ card }: ITeamItemProps) => {
  const url = card?.fileURL || DEFAULT_USER_IMG

  return (
    <li className={styles.teamItem}>
      <div className={`${styles.itemTop} ${getStyles(card!.theme)}`}>
        <div className={styles.imgWrapper}>
          <figure className={styles.teamCardImg}>
            <img src={url} alt="" />
            <figcaption className="visually-hidden">Profile</figcaption>
          </figure>
          <div
            className={`${styles.dot} 
              ${card?.login ? styles.online : styles.offline}`}
          ></div>
        </div>
        <span className="visually-hidden">
          {card?.login ? 'online' : 'offline'}
        </span>
      </div>
      <div className={styles.teamCardInfo}>
        <h3 className={styles.userName}>{card?.name}</h3>
        <span className={styles.userTeam}>{card?.team}</span>
        <span className={styles.userRank}>{card?.rank}</span>
      </div>
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

export default TeamItem
