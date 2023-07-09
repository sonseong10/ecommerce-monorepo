import React from 'react'

import DEFAULT_USER_IMG from '../../../assets/images/img-user-default.png'

import styles from '../../../styles/modules/team-card.module.css'

interface ITeamItemProps {
  card: any
}
const TeamItem = ({ card }: ITeamItemProps) => {
  const { name, login, theme, team, rank, fileURL } = card
  const url = fileURL || DEFAULT_USER_IMG

  return (
    <li className={styles.teamItem}>
      <div className={`${styles.itemTop} ${getStyles(theme)}`}>
        <div className={styles.imgWrapper}>
          <figure className={styles.teamCardImg}>
            <img src={url} alt="" />
            <figcaption className="visually-hidden">Profile</figcaption>
          </figure>
          <div
            className={`${styles.dot} 
              ${login ? styles.online : styles.offline}`}
          ></div>
        </div>
        <span className="visually-hidden">{login ? 'online' : 'offline'}</span>
      </div>
      <div className={styles.teamCardInfo}>
        <h3 className={styles.userName}>{name}</h3>
        <span className={styles.userTeam}>{team}</span>
        <span className={styles.userRank}>{rank}</span>
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
