import React, { useRef } from 'react'
import TeamItem from './team-item'

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import styles from '../../../styles/modules/team-card.module.css'

interface ITeamListProps {
  cards:
    | {
        [key: string]: {
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
      }
    | undefined
  userCard?: {
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
  dark: boolean
}
const TeamList = ({ cards, userCard, dark }: ITeamListProps) => {
  const containerRef = useRef<HTMLUListElement>(null)

  const filterKey = cards
    ? Object.keys(cards).filter(
        (key) => key && cards[key].team.includes(userCard!.team)
      )
    : []

  const onPrevScroll = () => {
    containerRef.current!.scrollLeft -= 260
  }

  const onNextScroll = () => {
    containerRef.current!.scrollLeft += 260
  }

  return (
    <div className={styles.teamListWrapper}>
      <ul
        className={`${styles.teamList} ${dark && styles.isDark}`}
        ref={containerRef}
      >
        {filterKey.length &&
          filterKey.map((key) => (
            <TeamItem
              card={cards ? cards[key] : undefined}
              key={key}
            ></TeamItem>
          ))}
      </ul>

      <button
        className={`sm-hidden ${styles.moveBtn} ${styles.prevBtn}`}
        onClick={onPrevScroll}
      >
        <BiChevronLeft />
        <span className="visually-hidden">preview</span>
      </button>

      <button
        className={`sm-hidden ${styles.moveBtn} ${styles.nextBtn}`}
        onClick={onNextScroll}
      >
        <BiChevronRight />
        <span className="visually-hidden">next</span>
      </button>
    </div>
  )
}

export default TeamList
