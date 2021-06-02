import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import DEFAULT_USER_IMG from '../../assets/images/img-user-default.png'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/common.module.css'

import { FaUserAlt, FaSignOutAlt, FaMoon } from 'react-icons/fa'

const MyMenu = ({ authService }) => {
  const [myMenuOpen, setMyMenuOpen] = useState(false)
  const history = useHistory()

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/')
      }
    })
  })

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
          <button
            className={`${buttonStyles.baseBtn} ${styles.toolBtn}`}
            type="button"
          >
            <FaUserAlt className={styles.toolIcon} /> Info Update
          </button>
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
        <img className={styles.userIcon} src={DEFAULT_USER_IMG} alt="default" />
        No data yet...
      </button>
    </div>
  )
}

export default MyMenu
