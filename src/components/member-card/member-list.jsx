import React from 'react'

import styles from '../../styles/modules/member_card.module.css'
import MemberItem from './member-item'

const MemberList = ({ cards }) => {
  return (
    <div className={styles.memberListWrap}>
      <ul className={styles.memberList}>
        {Object.keys(cards).map((key) => {
          return <MemberItem card={cards[key]} key={key}></MemberItem>
        })}
      </ul>
    </div>
  )
}

export default MemberList
