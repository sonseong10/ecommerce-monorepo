import React from 'react'
import { Link } from 'react-router-dom'

import MyMenu from './common/my-menu'
import { BiHomeAlt, BiGroup, BiFile, BiMenu } from 'react-icons/bi'

import buttonStyles from '../styles/modules/buttons.module.css'
import styles from '../styles/modules/global_header.module.css'
import Logo from '../logo.svg'

const SideNavigation = ({
  ToggleOverlay,
  authService,
  userId,
  userCard,
  loding,
  isCard,
  onLogout,
  menuActive,
}) => {
  return (
    <div className="col-sm-4 col-md-3">
      <div className="wrapper">
        <header className={styles.globalHeader}>
          <div className={styles.snbLeft}>
            <button
              className={`${styles.snbIconButton} is-open sm-only`}
              type="button"
              aria-label="메뉴 열기 버튼"
            >
              <BiMenu />
            </button>
            <strong className={styles.logo}>
              <Link to={userId ? '/' : '#'}>
                <img className="logo-img" src={Logo} alt="WhoMember" />
              </Link>
            </strong>
          </div>
          <div className={`${styles.snbRight} sm-hidden`}>
            <nav className="snb">
              <h2 className="visually-hidden">Side Navigation Bar</h2>
              <ul className="snb-list">
                <li className="snb-item">
                  <Link
                    to={userId ? '/' : '#'}
                    className={`${styles.snbItemButton} ${
                      menuActive === 'home' && styles.isActive
                    }`}
                    type="button"
                  >
                    <BiHomeAlt className={styles.snbButtonIcon} />
                    Home
                  </Link>
                </li>
                <li className="snb-item">
                  <Link
                    to={isCard ? '/search' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'search' && styles.isActive}`}
                    type="button"
                  >
                    <BiGroup className={styles.snbButtonIcon} />
                    Search
                  </Link>
                </li>
                <li className="snb-item">
                  <Link
                    to={isCard ? '/work' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'work' && styles.isActive}`}
                    type="button"
                  >
                    <BiFile className={styles.snbButtonIcon} />
                    Work
                  </Link>
                </li>
              </ul>
            </nav>
            {userId ? (
              <MyMenu
                authService={authService}
                userCard={userCard}
                isCard={isCard}
                onLogout={onLogout}
              ></MyMenu>
            ) : (
              <button
                className={`${styles.loginBtn} ${buttonStyles.primaryBtn} ${buttonStyles.baseBtn} `}
                onClick={ToggleOverlay}
                type="button"
                disabled={loding}
              >
                {loding ? `Loding` : `Login & Signup`}
              </button>
            )}
          </div>
        </header>
      </div>
    </div>
  )
}

export default SideNavigation
