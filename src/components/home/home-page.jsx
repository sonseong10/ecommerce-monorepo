import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import LodingSpinner from '../common/loding-spinner'
import TeamList from '../team-card/team-list'

import styles from '../../styles/modules/home_page.module.css'
import SlickCarousel from '../common/slick-carousel'

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

            <article className={`${styles.todo}`}>
              <div className={styles.articleTitle}>
                <h2>업무</h2>
                <strong>{Object.keys(works).length}</strong>
              </div>
              <ul className={styles.workList}>
                {Object.keys(works).length ? (
                  Object.keys(works).map((key) => (
                    <li className={styles.workItem} key={works[key].time}>
                      <Link to="/work">{works[key].title}</Link>
                    </li>
                  ))
                ) : (
                  <li className={styles.workItem}>
                    <p className={styles.lsitNone}>리스트가 없습니다.</p>
                    <Link className={styles.lsitNone} to="/work">
                      업무 작성
                    </Link>
                  </li>
                )}
              </ul>
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
