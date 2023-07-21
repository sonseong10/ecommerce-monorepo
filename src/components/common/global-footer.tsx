import React from 'react'
import { Link } from 'react-router-dom'

import { BiHomeAlt, BiGroup, BiFile } from 'react-icons/bi'

import styles from '../../styles/modules/mobile-navbar.module.css'

interface IGlobalFooterProps {
  userId: string
  menuActive: 'search' | 'home' | 'work'
  dark: boolean
}

const GlobalFooter = React.memo(
  ({ userId, menuActive, dark }: IGlobalFooterProps) => {
    return (
      <footer
        className={`sm-only ${styles.globalFooter} ${dark && styles.isDark}`}
      >
        <Link
          to="/search"
          className={`${styles.link} 
        ${menuActive === 'search' && styles.isActive}`}
        >
          <BiGroup aria-hidden />
          <span className="visually-hidden">직원 검색으로 이동</span>
        </Link>
        <Link
          to={userId ? '/' : '#'}
          className={`${styles.link} 
        ${menuActive === 'home' && styles.isActive}`}
        >
          <BiHomeAlt aria-hidden />
          <span className="visually-hidden">메인 홈으로 이동</span>
        </Link>
        <Link
          to="/work"
          className={`${styles.link} 
        ${menuActive === 'work' && styles.isActive}`}
        >
          <BiFile aria-hidden />
          <span className="visually-hidden">업무 리스트로 이동</span>
        </Link>
      </footer>
    )
  }
)

export default GlobalFooter
