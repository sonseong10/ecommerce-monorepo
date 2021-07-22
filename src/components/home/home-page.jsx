import React, { useEffect } from 'react'

import TeamList from './team-card/team-list'
import LodingSpinner from '../common/loding-spinner'
import SlickCarousel from '../common/slick-carousel'

import styles from '../../styles/modules/home-page.module.css'
import WorkLinkList from './work-link-list'

const HomePage = ({ isCard, cards, works, userCard, onMenuChange }) => {
  useEffect(() => {
    onMenuChange('home')
  })

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      {isCard ? (
        <div className={`${styles.articleGroup}`}>
          <div className={styles.articleLeft}>
            <article className={styles.benner}>
              <div className={styles.articleTitle}>
                <h2>회사 소개</h2>
              </div>
              <SlickCarousel></SlickCarousel>
            </article>

            <article className={`${styles.work}`}>
              <div className={styles.articleTitle}>
                <h2>업무</h2>
                <strong>{Object.keys(works).length}</strong>
              </div>
              <WorkLinkList works={works}></WorkLinkList>
            </article>
          </div>

          <article className={styles.member}>
            <div className={styles.articleTitle}>
              <h2>팀원</h2>
            </div>
            <TeamList cards={cards} userCard={userCard}></TeamList>
          </article>
        </div>
      ) : (
        <LodingSpinner></LodingSpinner>
      )}
    </div>
  )
}

export default HomePage
