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
      <div className="wrapper">
        {isCard ? (
          <div className={`${styles.articleWrap}`}>
            <div className={styles.articleLeft}>
              <article className={styles.benner}>
                <h2 className={`lg-only ${styles.articleTitle}`}>회사정보</h2>
                <SlickCarousel></SlickCarousel>
              </article>
              <article className={`sm-hidden ${styles.todo}`}>
                <h2 className={`lg-only ${styles.articleTitle}`}>
                  업무 리스트
                </h2>
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
              <h2 className={`lg-only ${styles.articleTitle}`}>팀원정보</h2>
              <TeamList cards={cards} userCard={userCard}></TeamList>
            </article>
          </div>
        ) : (
          <LodingSpinner></LodingSpinner>
        )}
      </div>
    </div>
  )
}

export default HomePage
