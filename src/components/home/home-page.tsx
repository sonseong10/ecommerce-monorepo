import React, { useEffect } from 'react'

import TeamList from './team-card/team-list'
import LodingSpinner from '../common/loding-spinner'

import styles from '../../styles/modules/home-page.module.css'
import WorkLinkList from './work-link-list'
interface IHomePageProps {
  isCard: number
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
  works:
    | {
        [key: string]: {
          contents: string
          time: number
          title: string
        }
      }
    | undefined
  userCard:
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
  onMenuChange: (v: 'search' | 'work' | 'home') => void
  dark: boolean
}
const HomePage = ({
  isCard,
  cards,
  works,
  userCard,
  onMenuChange,
  dark,
}: IHomePageProps) => {
  useEffect(() => {
    onMenuChange('home')
  }, [onMenuChange])

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      {isCard ? (
        <div className={`${styles.articleGroup} ${dark && styles.isDark}`}>
          <div className={styles.articleLeft}>
            <article className={`${styles.work}`}>
              <div className={styles.articleTitle}>
                <h2>작업중인 업무</h2>
                <strong>{Object.keys(works!).length}</strong>
              </div>
              <WorkLinkList works={works} dark={dark}></WorkLinkList>
            </article>
          </div>

          <article className={styles.member}>
            <div className={styles.articleTitle}>
              <h2>팀원</h2>
            </div>
            <TeamList cards={cards} userCard={userCard} dark={dark}></TeamList>
          </article>
        </div>
      ) : (
        <LodingSpinner></LodingSpinner>
      )}
    </div>
  )
}

export default HomePage
