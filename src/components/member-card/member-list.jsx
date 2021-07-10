import React from 'react'

import styles from '../../styles/modules/member_card.module.css'
import MemberItem from './member-item'

const MemberList = ({ cards, searchValue }) => {
  const filterCards = Object.keys(cards).filter((key) =>
    cards[key].name.includes(searchValue)
  )

  return (
    <ul className={styles.memberList}>
      {filterCards.length
        ? filterCards.map((key) => {
            return <MemberItem card={cards[key]} key={key}></MemberItem>
          })
        : Object.keys(cards).map((key) => (
            <MemberItem card={cards[key]} key={key}></MemberItem>
          ))}
    </ul>
  )
}

export default MemberList
