import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { BiHomeAlt, BiGroup, BiFile, BiCart, BiCar, BiSitemap } from 'react-icons/bi'

import styles from 'styles/modules/sidebar.module.css'
import type { ICardVo } from 'types/grobal-type'

interface ISideNavigationProps {
  ToggleOverlay: () => void
  userId: string
  userCard?: ICardVo
  loding: boolean
  isCard: number
  onMenuChange: (v: string) => void
  onLogout: () => void
  menuActive: string
  handleModeChange: () => void
  dark: boolean
}
const SideNavigation = ({ userId, isCard, onMenuChange, menuActive, dark }: ISideNavigationProps) => {
  const position = location.href.split('/')
  useEffect(() => {
    if (position.length >= 6) {
      onMenuChange(position[position.length - 2]!)
    } else {
      onMenuChange(position.pop()!)
    }
  }, [location.href])

  return (
    <div className={`col-md-2 col-lg-3 sm-hidden ${styles.floating}`}>
      <article className={`${styles.article} ${dark && styles.isDark}`}>
        <div className={styles.navGroup}>
          <nav className="snb">
            <h3 className="visually-hidden">Side Navigation Bar</h3>
            <ul className="snb-list">
              <li className="snb-item">
                <Link
                  to={'/admin/main'}
                  className={`${styles.snbItemButton} 
                    ${menuActive === 'main' && styles.isActive}
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
                  인사관리
                </Link>
              </li>
              <li className="snb-item">
                <Link
                  to={isCard ? '/admin/work/manage' : '#'}
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

export default React.memo(SideNavigation)
