import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import MyMenu from './common/my-menu'
import {
  BiHomeAlt,
  BiGroup,
  BiFile,
  BiCart,
  BiCar,
  BiSitemap,
} from 'react-icons/bi'

import buttonStyles from '../styles/modules/buttons.module.css'
import styles from '../styles/modules/sidebar.module.css'

import Logo from '../assets/images/logo.svg'
import DarkLogo from '../assets/images/dark-logo.svg'
import type { ICardVo } from 'types/grobal-type'
// import TabletLogo from '../assets/images/tablet-logo.svg'

interface ISideNavigationProps {
  ToggleOverlay: () => void
  userId: string
  userCard?: ICardVo
  loding: boolean
  isCard: number
  onLogout: () => void
  menuActive: string
  handleModeChange: () => void
  dark: boolean
}
const SideNavigation = memo(
  ({
    ToggleOverlay,
    userId,
    userCard,
    loding,
    isCard,
    onLogout,
    menuActive,
    handleModeChange,
    dark,
  }: ISideNavigationProps) => {
    return (
      <div className="col-md-2 col-lg-3 sm-hidden">
        <article className={`${styles.article} ${dark && styles.isDark}`}>
          <h2 className="visually-hidden">Tablet and Desktop side Bar</h2>
          <header className={styles.header}>
            <strong className={`lg-only ${styles.logo}`}>
              <Link to={userId ? '/admin/main' : '#'}>
                <img
                  className="logo-img"
                  src={!dark ? Logo : DarkLogo}
                  alt="WhoMember"
                />
                <span className="visually-hidden">Logo Image</span>
              </Link>
            </strong>
            <strong className={`md-only ${styles.tabletLogo}`}>
              <Link to={userId ? '/admin/main' : '#'}>
                <img className="logo-img" src={Logo} alt="WhoMember" />
                <span className="visually-hidden">Logo Image</span>
              </Link>
            </strong>
          </header>

          <div className={styles.navGroup}>
            <nav className="snb">
              <h3 className="visually-hidden">Side Navigation Bar</h3>
              <ul className="snb-list">
                <li className="snb-item">
                  <Link
                    to={userId ? '/admin/main' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'home' && styles.isActive}
                    ${!userId && styles.isDisable}`}
                  >
                    <BiHomeAlt />
                    메인
                  </Link>
                </li>
                <li className="snb-item">
                  <Link
                    to={isCard ? '/admin/member' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'member' && styles.isActive} 
                    ${!userId && styles.isDisable}`}
                  >
                    <BiGroup />
                    사원찾기
                  </Link>
                </li>
                <li className="snb-item">
                  <Link
                    to={isCard ? '/admin/work' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'work' && styles.isActive} 
                    ${!userId && styles.isDisable}`}
                  >
                    <BiFile />
                    업무일지
                  </Link>
                </li>
                <li className="snb-item">
                  <Link
                    to={isCard ? '/admin/product/list' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'product' && styles.isActive} 
                    ${!userId && styles.isDisable}`}
                  >
                    <BiCart />
                    상품관리
                  </Link>
                </li>
                <li className="snb-item">
                  <Link
                    to={isCard ? '/admin/delivery' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'delivery' && styles.isActive} 
                    ${!userId && styles.isDisable}`}
                  >
                    <BiCar />
                    배송관리
                  </Link>
                </li>

                <li className="snb-item">
                  <Link
                    to={isCard ? '/admin/display' : '#'}
                    className={`${styles.snbItemButton} 
                    ${menuActive === 'display' && styles.isActive} 
                    ${!userId && styles.isDisable}`}
                  >
                    <BiSitemap />
                    진열관리
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <footer className={styles.footer}>
            {userId ? (
              <MyMenu
                userCard={userCard}
                isCard={isCard}
                onLogout={onLogout}
                handleModeChange={handleModeChange}
                dark={dark}
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

            <dl className={styles.detailList}>
              <div className={styles.detailItem}>
                <dt className="visually-hidden">made</dt>
                <dd>ⓒJuly 2021</dd>
              </div>
              <div className={styles.detailItem}>
                <dt className="visually-hidden">github link</dt>
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
          </footer>
        </article>
      </div>
    )
  }
)

export default SideNavigation
