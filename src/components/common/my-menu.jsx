import React, { useState } from 'react'

import DEFAULT_USER_IMG from '../../assets/images/img-user-default.png'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/common.module.css'

import { FaUserAlt, FaSignOutAlt, FaMoon } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MyMenu = ({ authService, userCard, isCard }) => {
  const [myMenuOpen, setMyMenuOpen] = useState(false)
  const { name, fileURL } = userCard

  const onLogout = () => {
    authService.logout()
  }

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
            <FaMoon className={styles.toolIcon} /> Dark Mode
          </button>
        </li>
        <li>
          <Link
            to={isCard ? '/update' : '#'}
            className={`${buttonStyles.baseBtn} ${styles.toolBtn}`}
            type="button"
          >
            <FaUserAlt className={styles.toolIcon} />
            {isCard ? 'Info Update' : 'Disable'}
          </Link>
        </li>
        <li>
          <button
            className={`${buttonStyles.baseBtn} ${styles.toolBtn} ${styles.logoutBtn}`}
            type="button"
            onClick={onLogout}
          >
            <FaSignOutAlt className={styles.toolIcon} />
            Log out
          </button>
        </li>
      </ul>
      <button
        className={`${styles.mymemuBtn} ${buttonStyles.baseBtn} `}
        onClick={onIsActive}
      >
        <img
          className={styles.userIcon}
          src={fileURL || DEFAULT_USER_IMG}
          alt={fileURL ? 'user profile' : 'default'}
        />
        <span className={name && styles.isActive}>
          {name || 'No data yet...'}
        </span>
      </button>
    </div>
  )
}

export default MyMenu
