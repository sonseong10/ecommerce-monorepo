import React, { memo, useEffect, useState } from 'react'

import Logo from '../logo.svg'

import { BiHomeAlt, BiSearch, BiMenu } from 'react-icons/bi'
import buttonStyles from '../styles/modules/buttons.module.css'
import styles from '../styles/modules/global_header.module.css'
import { useHistory } from 'react-router-dom'
import MyMenu from './common/my-menu'

const SideNavigation = memo(
  ({ menus, handleOpenPopup, authService, isUser }) => {
    const [userId, setUserId] = useState()

    const history = useHistory()

    useEffect(() => {
      authService.onAuthChange((user) => {
        if (!user) {
          history.push('/')
        } else {
          setUserId(user.uid)
        }
      })
    })

    const onToHome = () => {
      history.push({
        pathname: '/home',
        state: { id: userId },
      })
    }

    const onToSearch = () => {
      history.push({
        pathname: '/search',
        state: { id: userId },
      })
    }

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
                    <button
                      className={`${styles.snbItemButton} ${
                        menus === 'home' && styles.isActive
                      }`}
                      onClick={onToHome}
                      type="button"
                      disabled={!isUser}
                    >
                      <BiHomeAlt className={styles.snbButtonIcon} />
                      Home
                    </button>
                  </li>
                  <li className="snb-item">
                    <button
                      className={`${styles.snbItemButton} 
                    ${menus === 'search' && styles.isActive}`}
                      onClick={onToSearch}
                      type="button"
                      disabled={!isUser}
                    >
                      <BiSearch className={styles.snbButtonIcon} />
                      Search
                    </button>
                  </li>
                </ul>
              </nav>
              {isUser ? (
                <MyMenu authService={authService}></MyMenu>
              ) : (
                <button
                  className={`${styles.loginBtn} ${buttonStyles.primaryBtn} ${buttonStyles.baseBtn} `}
                  onClick={handleOpenPopup}
                  type="button"
                >
                  Login &#38; Signup
                </button>
              )}
            </div>
          </header>
        </div>
      </div>
    )
  }
)

export default SideNavigation
