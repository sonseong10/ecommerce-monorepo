import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BiHomeAlt, BiGroup, BiFile, BiCart, BiCar, BiSitemap } from 'react-icons/bi'

import styles from 'styles/modules/sidebar.module.css'

const SideNavigation = () => {
  const location = useLocation()
  const position = location.pathname.split('/')
  const [menuActive, setMenuActive] = useState('main')
  useEffect(() => {
    if (position.length >= 4) {
      setMenuActive(position[position.length - 2]!)
    } else {
      setMenuActive(position.pop()!)
    }
  }, [position])

  return (
    <div className={`col-md-2 col-lg-3 sm-hidden ${styles.floating}`}>
      <article className={`${styles.article} `}>
        <div className={styles.navGroup}>
          <nav className="snb">
            <h3 className="visually-hidden">Side Navigation Bar</h3>
            <ul className="snb-list">
              <li className="snb-item">
                <Link
                  to={'/admin/main'}
                  className={`${styles.snbItemButton} 
                    ${menuActive === 'main' && styles.isActive}`}
                >
                  <BiHomeAlt />
                  메인
                </Link>
              </li>
              <li className="snb-item">
                <Link
                  to="/admin/member/manage"
                  className={`${styles.snbItemButton} 
                    ${menuActive === 'member' && styles.isActive} 
                    `}
                >
                  <BiGroup />
                  인사관리
                </Link>
              </li>
              <li className="snb-item">
                <Link
                  to="/admin/work/manage"
                  className={`${styles.snbItemButton} 
                    ${menuActive === 'work' && styles.isActive} 
                    `}
                >
                  <BiFile />
                  업무일지
                </Link>
              </li>
              <li className="snb-item">
                <Link
                  to="/admin/product/list"
                  className={`${styles.snbItemButton} 
                    ${menuActive === 'product' && styles.isActive} 
                    `}
                >
                  <BiCart />
                  상품관리
                </Link>
              </li>
              <li className="snb-item">
                <Link
                  to="/admin/delivery"
                  className={`${styles.snbItemButton} 
                    ${menuActive === 'delivery' && styles.isActive} 
                    `}
                >
                  <BiCar />
                  배송관리
                </Link>
              </li>

              <li className="snb-item">
                <Link
                  to="/admin/display"
                  className={`${styles.snbItemButton} 
                    ${menuActive === 'display' && styles.isActive} 
                    `}
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
