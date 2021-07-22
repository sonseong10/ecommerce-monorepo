import React from 'react'
import { useHistory } from 'react-router-dom'

import { BiUser, BiX, BiMoon } from 'react-icons/bi'

import buttonStyles from '../../styles/modules/buttons.module.css'
import sidebarStyles from '../../styles/modules/mobile-sidebar.module.css'
import commonStyles from '../../styles/modules/common.module.css'

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
      className={`sm-only ${sidebarStyles.sideBar} ${
        isOpen && sidebarStyles.isActive
      }`}
    >
      <h2 className="visually-hidden">mobile menu</h2>
      <nav>
        <h3 className="visually-hidden"> side bar </h3>
        <ul>
          <li>
            <button
              className={`${buttonStyles.baseBtn} ${commonStyles.toolBtn}`}
              onClick={toggleOpenSideBar}
              type="button"
            >
              <BiMoon className={commonStyles.toolIcon} />
              Dark Mode
            </button>
          </li>
          <li>
            <button
              className={`${buttonStyles.baseBtn} ${commonStyles.toolBtn}`}
              onClick={goToUpdate}
              type="button"
            >
              <BiUser className={commonStyles.toolIcon} />

              {isCard ? 'Info Update' : 'Disable'}
            </button>
          </li>
          <li>
            <button
              className={`${buttonStyles.baseBtn} ${commonStyles.toolBtn} ${commonStyles.logoutBtn}`}
              type="button"
              onClick={handleLogout}
            >
              <BiX className={commonStyles.toolIcon} />
              Log out
            </button>
          </li>
        </ul>
      </nav>
      <footer>
        <dl className={sidebarStyles.detailList}>
          <div className={sidebarStyles.detailItem}>
            <dt className="visually-hidden">made</dt>
            <dd>@July 2021</dd>
          </div>
          <div className={sidebarStyles.detailItem}>
            <dt className="visually-hidden">github</dt>
            <dd>
              <address>
                <button
                  onClick={() => {
                    window.open('https://github.com/sonseong10', '_blank')
                  }}
                  type="button"
                >
                  sonseong10
                </button>
              </address>
            </dd>
          </div>
        </dl>
      </footer>
    </article>
  )
}

export default MobileSideBar
