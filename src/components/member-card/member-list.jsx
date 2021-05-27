import React from 'react'

import styles from '../../styles/modules/member_card.module.css'
import MemberItem from './member-item'

const MemberList = ({ cards }) => {
  return (
    <div className={styles.memberListWrap}>
      <ul className={styles.memberList}>
        {cards.map((card) => {
          return <MemberItem card={card} key={card.uid}></MemberItem>
        })}
      </ul>
    </div>
  )
}

export default MemberList
