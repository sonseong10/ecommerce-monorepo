import React, { useState } from 'react'
import { FiCamera } from 'react-icons/fi'

import DropDown from '../common/dropdown'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/maker.module.css'

const Maker = ({ cards, teams, ranks }) => {
  const [teamsType] = useState('전체')
  const [ranksType] = useState('전체')
  const [theme] = useState([
    { id: 1, value: 'Gray' },
    { id: 2, value: 'Blue' },
    { id: 3, value: 'yellow' },
  ])

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="col-sm-4 col-md-9">
      <div className="wrapper">
        <form className={styles.authForm} onSubmit={onSubmit}>
          <label
            className={`${buttonStyles.baseBtn} ${buttonStyles.primaryBtn} ${styles.profileBtn}`}
            htmlFor="profile"
          >
            <FiCamera /> Add to profile
          </label>
          <input type="file" id="profile" />

          <input
            className={styles.authFormInput}
            type="text"
            id="name"
            placeholder="Name"
          />

          <input
            className={styles.authFormInput}
            type="text"
            id="email"
            placeholder="Email"
          />

          <input
            className={styles.authFormInput}
            type="text"
            id="phone"
            placeholder="Phone"
          />

          <input
            className={styles.authFormInput}
            type="text"
            id="telephone"
            placeholder="TelePhone"
          />

          <textarea
            className={styles.authFormInput}
            id="msg"
            cols="30"
            rows="3"
            maxLength="100"
            placeholder="Msg"
          ></textarea>

          <div className={styles.typeBtnList}>
            <div className={styles.typeBtnItem}>
              <button
                className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.typeBtn}`}
                type="button"
              >
                {theme[0].value}
              </button>
              <div className={styles.typeBtnItem}>
                <DropDown listItems={theme} />
              </div>
            </div>

            <div className={styles.typeBtnItem}>
              <button
                className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.typeBtn}`}
                type="button"
              >
                {teamsType}
              </button>
              <div>
                <DropDown listItems={teams} />
              </div>
            </div>

            <div>
              <button
                className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.typeBtn}`}
                type="button"
              >
                {ranksType}
              </button>
              <div>
                <DropDown listItems={ranks} />
              </div>
            </div>
          </div>
          <button
            className={`${buttonStyles.baseBtn} ${buttonStyles.primaryBtn} ${styles.submitBtn}`}
            type="submit"
          >
            Ok
          </button>
        </form>
      </div>
    </div>
  )
}

export default Maker
