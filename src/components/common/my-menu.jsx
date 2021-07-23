import React, { useState } from 'react'

import DEFAULT_USER_IMG from '../../assets/images/img-user-default.png'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/common.module.css'

import { BiUser, BiX, BiMoon } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const MyMenu = ({ userCard, isCard, onLogout, handleModeChange, dark }) => {
  const [myMenuOpen, setMyMenuOpen] = useState(false)
  const { name, fileURL } = userCard

  const onIsActive = () => {
    setMyMenuOpen(!myMenuOpen)
  }

  return (
    <div
      className={`${styles.myMenu} 
      ${myMenuOpen && styles.isActive} 
      ${dark && styles.isDark}`}
    >
      <ul className={styles.myMenuList}>
        <li>
          <button
            className={`${buttonStyles.baseBtn} ${styles.toolBtn}`}
            onClick={handleModeChange}
            type="button"
          >
            <BiMoon className={styles.toolIcon} />
            <span className="lg-only">다크모드 {dark ? '끄기' : '켜기'}</span>
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
              {isCard ? '정보 업데이트' : '이용불가'}
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
