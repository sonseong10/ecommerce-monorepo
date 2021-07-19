import React from 'react'
import { Link } from 'react-router-dom'

import { BiHomeAlt, BiGroup, BiFile } from 'react-icons/bi'

import styles from '../styles/modules/global-footer.module.css'

const GlobalFooter = ({ userId, menuActive }) => {
  return (
    <footer className={`sm-only ${styles.globalFooter}`}>
      <Link
        to="/search"
        className={`${styles.link} 
        ${menuActive === 'search' && styles.isActive}`}
      >
        <BiGroup></BiGroup>
      </Link>
      <Link
        to={userId ? '/' : '#'}
        className={`${styles.link} 
        ${menuActive === 'home' && styles.isActive}`}
        type="button"
      >
        <BiHomeAlt></BiHomeAlt>
      </Link>
      <Link
        to="/work"
        className={`${styles.link} 
        ${menuActive === 'work' && styles.isActive}`}
      >
        <BiFile></BiFile>
      </Link>
    </footer>
  )
}

export default GlobalFooter
