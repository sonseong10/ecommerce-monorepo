import React, { useEffect, useState } from 'react'
import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/common.module.css'
import { FaUserAlt, FaSignOutAlt, FaMoon } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

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
            className={`${buttonStyles.baseBtn} ${styles.toolBtn} ${styles.logout}`}
            type="button"
            onClick={onLogout}
          >
            <FaSignOutAlt className={styles.toolIcon} />
            Log out
          </button>
        </li>
      </ul>
      <button
        className={`${styles.logoutBtn} ${buttonStyles.baseBtn} `}
        onClick={onIsActive}
      >
        User
      </button>
    </div>
  )
}

export default MyMenu
