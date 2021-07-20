import React from 'react'
import { useHistory } from 'react-router-dom'

import { BiUser, BiX, BiMoon } from 'react-icons/bi'

import buttonStyles from '../styles/modules/buttons.module.css'
import layoutStyles from '../styles/modules/mobile-sidebar.module.css'
import styles from '../styles/modules/common.module.css'

const MobileSideBar = ({ onLogout, isCard, isOpen, toggleOpenSideBar }) => {
  const history = useHistory()

  const handleLogout = () => {
    toggleOpenSideBar()
    onLogout()
  }

  const goToUpdate = () => {
    toggleOpenSideBar()
    history.push('/update')
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
            <button
              className={`${buttonStyles.baseBtn} ${styles.toolBtn}`}
              onClick={goToUpdate}
              type="button"
            >
              <BiUser className={styles.toolIcon} />

              {isCard ? 'Info Update' : 'Disable'}
            </button>
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
      <dl className={styles.detailList}>
        <div className={styles.detailItem}>
          <dt className="visually-hidden">made</dt>
          <dd>@July 2021</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className="visually-hidden">github</dt>
          <dd>
            <address>
              <button
                onClick={() => {
                  window.open('https://github.com/sonseong10', '_blank')
                }}
              >
                sonseong10
              </button>
            </address>
          </dd>
        </div>
      </dl>
    </article>
  )
}

export default MobileSideBar
