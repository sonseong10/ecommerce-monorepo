import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'

import buttonStyles from '../styles/modules/buttons.module.css'
import styles from '../styles/modules/global-header.module.css'

import DEFAULT_USER_IMG from '../assets/images/img-user-default.png'
import Logo from '../logo.svg'

const GlobalHeader = ({
  userId,
  userCard,
  toggleOverlay,
  toggleOpenSideBar,
}) => {
  const [hide, setHide] = useState(false)
  const [pageY, setPageY] = useState(0)

  const sticky = function (stickyScroll, waitTime) {
    let timerId = null
    return (event) => {
      if (timerId) return
      timerId = setTimeout(() => {
        stickyScroll.call(this, event)
        timerId = null
      }, waitTime)
    }
  }

  const handleScroll = () => {
    const { pageYOffset } = window
    const deltaY = pageYOffset - pageY
    const hide = pageYOffset !== 0 && deltaY >= 0
    setHide(hide)
    setPageY(pageYOffset)
  }

  const stickyScroll = sticky(handleScroll, 50)

  useEffect(() => {
    document.addEventListener('scroll', stickyScroll)
    return () => document.removeEventListener('scroll', stickyScroll)
  }, [stickyScroll, pageY])

  return (
    <header className={`sm-only ${styles.header}`}>
      <div className={`${styles.globalHeader} ${hide && styles.hide}`}>
        <strong className={styles.logo}>
          <Link to={userId ? '/' : '#'}>
            <img className="logo-img" src={Logo} alt="WhoMember" />
          </Link>
        </strong>

        <button
          className={`${buttonStyles.baseBtn} ${styles.mobileIcon}`}
          onClick={!userId ? toggleOverlay : toggleOpenSideBar}
          type="button"
        >
          {!userId ? (
            <BiUserCircle></BiUserCircle>
          ) : (
            <figure>
              <img
                className={styles.smProfile}
                src={userCard.fileURL || DEFAULT_USER_IMG}
                alt=""
              />
              <figcaption className="visually-hidden">user profile</figcaption>
            </figure>
          )}
        </button>
      </div>
    </header>
  )
}

export default GlobalHeader
