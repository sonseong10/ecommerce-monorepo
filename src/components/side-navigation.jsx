import React from 'react'

import Logo from '../logo.svg'

import { BiHomeAlt, BiSearch, BiMenu } from 'react-icons/bi'
import styles from '../styles/modules/global_header.module.css'
import buttonStyles from '../styles/modules/buttons.module.css'

const SideNavigation = () => {
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
              <a href="/">
                <img className="logo-img" src={Logo} alt="WhoMember" />
              </a>
            </strong>
          </div>
          <div className={`${styles.snbRight} sm-hidden`}>
            <nav className="snb">
              <h2 className="visually-hidden">Side Navigation Bar</h2>
              <ul className="snb-list">
                <li className="snb-item">
                  <button className={`${styles.snbItemButton}`} type="button">
                    <BiHomeAlt className={styles.snbButtonIcon} />
                    Home
                  </button>
                </li>
                <li className="snb-item">
                  <button
                    className={`${styles.snbItemButton} ${styles.isActive}`}
                    type="button"
                  >
                    <BiSearch className={styles.snbButtonIcon} />
                    Search
                  </button>
                </li>
              </ul>
            </nav>
            <a
              className={`${styles.loginBtn} ${buttonStyles.primaryBtn} ${buttonStyles.baseBtn}`}
              href="/"
            >
              Login &#38; Signup
            </a>
          </div>
        </header>
      </div>
    </div>
  )
}

export default SideNavigation
