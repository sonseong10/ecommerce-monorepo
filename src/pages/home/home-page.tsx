import React from 'react'

import TeamList from './team-card/team-list'

import styles from '../../styles/modules/home-page.module.css'
import WorkLinkList from './work-link-list'
import type { ICardVo } from 'types/grobal-type'
import Spinner from 'components/ui/Spinner'

interface IHomePageProps {
  isCard?: ICardVo
  cards?: {
    [key: string]: ICardVo
  }

  works?: {
    [key: string]: {
      contents: string
      time: number
      title: string
    }
  }
  userCard?: ICardVo
  dark: boolean
}
const HomePage = ({ isCard, cards, works, userCard, dark }: IHomePageProps) => {
  return (
    <>
      {!isCard ? (
        <Spinner />
      ) : (
        <div className={`${styles.articleGroup} ${dark && styles.isDark}`}>
          <div className={styles.articleLeft}>
            <article className={`${styles.work}`}>
              <div className={styles.articleTitle}>
                <h2>작업중인 업무</h2>
                <strong>{works && Object.keys(works).length}</strong>
              </div>
              <WorkLinkList works={works} dark={dark}></WorkLinkList>
            </article>

            <div>운영중인 서비스 바로가기</div>
          </div>

          <article className={styles.member}>
            <div className={styles.articleTitle}>
              <h2>팀원</h2>
            </div>
            <TeamList cards={cards} userCard={userCard} dark={dark}></TeamList>
          </article>
        </div>
      )}
    </>
  )
}

export default HomePage
