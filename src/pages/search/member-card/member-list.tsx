import React from 'react'

import styles from '../../../styles/modules/member-card.module.css'

import MemberItem from './member-item'
import type { ICardVo } from 'types/grobal-type'

interface IMemberListProps {
  cards?: {
    [key: string]: ICardVo
  }
  searchValue?: string
  dark: boolean
}

const MemberList = ({ cards, searchValue, dark }: IMemberListProps) => {
  const filterCards = cards
    ? Object.keys(cards).filter((key) =>
        cards[key].name.includes(searchValue ? searchValue : '')
      )
    : []

  return (
    <ul className={`${styles.memberList} ${dark && styles.isDark}`}>
      {filterCards.length
        ? filterCards.map((key) => (
            <MemberItem
              card={cards ? cards[key] : undefined}
              key={key}
              uid={key}
            ></MemberItem>
          ))
        : cards &&
          Object.keys(cards).map((key) => (
            <MemberItem card={cards[key]} key={key} uid={key}></MemberItem>
          ))}
    </ul>
  )
}

export default MemberList
