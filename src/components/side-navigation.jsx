import React from 'react'
import { Link } from 'react-router-dom'

import MyMenu from './common/my-menu'
import { BiHomeAlt, BiGroup, BiFile } from 'react-icons/bi'

import buttonStyles from '../styles/modules/buttons.module.css'
import styles from '../styles/modules/global_header.module.css'

import Logo from '../logo.svg'
import TabletLogo from '../assets/images/tablet-logo.svg'

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
    <div className="sm-hidden col-md-2 col-lg-3">
      <div className="wrapper">
        <article className={styles.article}>
          <h2 className="visually-hidden">Side Bar</h2>
          <header className={styles.header}>
            <strong className={`lg-only ${styles.logo}`}>
              <Link to={userId ? '/' : '#'}>
                <img className="logo-img" src={Logo} alt="WhoMember" />
              </Link>
            </strong>
            <strong className={`md-only ${styles.tabletLogo}`}>
              <Link to={userId ? '/' : '#'}>
                <img className="logo-img" src={TabletLogo} alt="WhoMember" />
              </Link>
            </strong>
          </header>
          <div className={styles.navWrap}>
            <nav className="snb">
              <h3 className="visually-hidden">Side Navigation Bar</h3>
              <ul className="snb-list">
                <li className="snb-item">
                  <Link
                    to={userId ? '/' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'home' && styles.isActive}
                    ${!userId && styles.isDisable}`}
                    type="button"
                  >
                    <BiHomeAlt />
                    Home
                  </Link>
                </li>
                <li className="snb-item">
                  <Link
                    to={isCard ? '/search' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'search' && styles.isActive} 
                    ${!userId && styles.isDisable}`}
                    type="button"
                  >
                    <BiGroup />
                    Search
                  </Link>
                </li>
                <li className="snb-item">
                  <Link
                    to={isCard ? '/work' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'work' && styles.isActive} 
                    ${!userId && styles.isDisable}`}
                    type="button"
                  >
                    <BiFile />
                    Work
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <footer className={styles.footer}>
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
          </footer>
        </article>
      </div>
    </div>
  )
}

export default SideNavigation
