import React from 'react'
import { Link } from 'react-router-dom'

import { BiUser, BiX, BiMoon } from 'react-icons/bi'

import buttonStyles from '../styles/modules/buttons.module.css'
import layoutStyles from '../styles/modules/mobile-sidebar.module.css'
import styles from '../styles/modules/common.module.css'

const MobileSideBar = ({ onLogout, isCard, isOpen, toggleOpenSideBar }) => {
  const handleLogout = () => {
    toggleOpenSideBar()
    onLogout()
  }
  return (
    <article
      className={`sm-only ${layoutStyles.sideBar} ${
        isOpen && layoutStyles.isActive
      }`}
    >
      <h2 className="visually-hidden">mobile menu</h2>
      <nav>
        <h3 className="visually-hidden"> side bar </h3>
        <ul>
          <li>
            <button
              className={`${buttonStyles.baseBtn} ${styles.toolBtn}`}
              onClick={toggleOpenSideBar}
              type="button"
            >
              <BiMoon className={styles.toolIcon} />
              Dark Mode
            </button>
          </li>
          <li>
            <Link
              to={isCard ? '/update' : '#'}
              className={`${buttonStyles.baseBtn} ${styles.toolBtn}`}
              type="button"
            >
              <BiUser className={styles.toolIcon} />

              {isCard ? 'Info Update' : 'Disable'}
            </Link>
          </li>
          <li>
            <button
              className={`${buttonStyles.baseBtn} ${styles.toolBtn} ${styles.logoutBtn}`}
              type="button"
              onClick={handleLogout}
            >
              <BiX className={styles.toolIcon} />
              Log out
            </button>
          </li>
        </ul>
      </nav>
    </article>
  )
}

export default MobileSideBar
