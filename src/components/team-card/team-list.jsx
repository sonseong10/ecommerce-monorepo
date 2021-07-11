import React from 'react'
import TeamItem from './team-item'

import styles from '../../styles/modules/team_card.module.css'

const TeamList = ({ cards, userCard }) => {
  const filterKey = Object.keys(cards).filter((key) =>
    cards[key].team.includes(userCard.team)
  )

  return (
    <ul className={styles.teamList}>
      {filterKey.length &&
        filterKey.map((key) => (
          <TeamItem card={cards[key]} key={key}></TeamItem>
        ))}
    </ul>
  )
}

export default TeamList
