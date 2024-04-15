import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BiUser, BiX, BiMoon } from 'react-icons/bi'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/common.module.css'

interface IMobileSideBarProps {
  onLogout: () => void
  isCard: number
  sidebarOpen: boolean
  toggleOpenSideBar: () => void
  handleModeChange: () => void
  dark: boolean
}

const MobileSideBar = ({
  onLogout,
  isCard,
  sidebarOpen,
  toggleOpenSideBar,
  handleModeChange,
  dark,
}: IMobileSideBarProps) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    toggleOpenSideBar()
    onLogout()
  }

  const goToUpdate = () => {
    toggleOpenSideBar()
    navigate('/update')
  }

  const onDarkMode = () => {
    toggleOpenSideBar()
    handleModeChange()
  }

  return (
    <article
      className={`sm-only ${styles.sideBar} 
      ${sidebarOpen && styles.isActive} 
      ${dark && styles.isDark}`}
    >
      <h2 className="visually-hidden">모바일 메뉴</h2>
      <nav>
        <h3 className="visually-hidden">메뉴 리스트</h3>
        <ul>
          <li>
            <button className={`${buttonStyles.baseBtn} ${styles.toolBtn}`} onClick={onDarkMode} type="button">
              <BiMoon className={styles.toolIcon} aria-hidden />
              Dark Mode
            </button>
          </li>
          <li>
            <button className={`${buttonStyles.baseBtn} ${styles.toolBtn}`} onClick={goToUpdate} type="button">
              <BiUser className={styles.toolIcon} aria-hidden />

              {isCard ? 'Info Update' : 'Disable'}
            </button>
          </li>
          <li>
            <button
              className={`${buttonStyles.baseBtn} ${styles.toolBtn} ${styles.logoutBtn}`}
              type="button"
              onClick={handleLogout}
            >
              <BiX className={styles.toolIcon} aria-hidden />
              Log out
            </button>
          </li>
        </ul>
      </nav>
      <footer>
        <dl className={styles.detailList}>
          <div className={styles.detailItem}>
            <dt className="visually-hidden">만든 일자</dt>
            <dd>ⓒJuly 2021</dd>
          </div>
          <div className={styles.detailItem}>
            <dt className="visually-hidden">github 이동</dt>
            <dd>
              <address>
                <a href="https://github.com/sonseong10" target="_blank" rel="noreferrer">
                  sonseong10
                </a>
              </address>
            </dd>
          </div>
        </dl>
      </footer>
    </article>
  )
}

export default React.memo(MobileSideBar)
