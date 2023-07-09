import React from 'react'

import styles from '../../../styles/modules/member-card.module.css'

import MemberItem from './member-item'

interface IMemberListProps {
  cards: any
  searchValue: any
  dark: any
}

const MemberList = ({ cards, searchValue, dark }: IMemberListProps) => {
  const filterCards = Object.keys(cards).filter((key) =>
    cards[key].name.includes(searchValue)
  )

  return (
    <ul className={`${styles.memberList} ${dark && styles.isDark}`}>
      {filterCards.length
        ? filterCards.map((key) => {
            return (
              <MemberItem card={cards[key]} key={key} uid={key}></MemberItem>
            )
          })
        : Object.keys(cards).map((key) => (
            <MemberItem card={cards[key]} key={key} uid={key}></MemberItem>
          ))}
    </ul>
  )
}

export default MemberList
