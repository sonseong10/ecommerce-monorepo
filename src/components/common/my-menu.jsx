import React, { useState } from 'react'

import DEFAULT_USER_IMG from '../../assets/images/img-user-default.png'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/common.module.css'

import { BiUser, BiX, BiMoon } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const MyMenu = ({ userCard, isCard, onLogout }) => {
  const [myMenuOpen, setMyMenuOpen] = useState(false)
  const { name, fileURL } = userCard

  const onIsActive = () => {
    setMyMenuOpen(!myMenuOpen)
  }
  return (
    <div className={`${styles.myMenu} ${myMenuOpen && styles.isActive}`}>
      <ul className={styles.myMenuList}>
        <li>
          <button
            className={`${buttonStyles.baseBtn} ${styles.toolBtn}`}
            type="button"
          >
            <BiMoon className={styles.toolIcon} />
            <span className="lg-only">Dark Mode</span>
          </button>
        </li>
        <li>
          <Link
            to={isCard ? '/update' : '#'}
            className={`${buttonStyles.baseBtn} ${styles.toolBtn}`}
            type="button"
          >
            <BiUser className={styles.toolIcon} />
            <span className="lg-only">
              {isCard ? 'Info Update' : 'Disable'}
            </span>
          </Link>
        </li>
        <li>
          <button
            className={`${buttonStyles.baseBtn} ${styles.toolBtn} ${styles.logoutBtn}`}
            type="button"
            onClick={onLogout}
          >
            <BiX className={styles.toolIcon} />
            <span className="lg-only">Log out</span>
          </button>
        </li>
      </ul>
      <button
        className={`${buttonStyles.baseBtn} ${styles.mymemuBtn}`}
        onClick={onIsActive}
      >
        <img
          className={styles.userIcon}
          src={fileURL || DEFAULT_USER_IMG}
          alt={fileURL ? 'user profile' : 'default'}
        />
        <span className={`lg-only ${name && styles.isActive}`}>
          {name || 'No data yet...'}
        </span>
      </button>
    </div>
  )
}

export default MyMenu
