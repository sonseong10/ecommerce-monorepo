import React, { useRef, useState } from 'react'
import { FiCamera } from 'react-icons/fi'

import DropDown from '../common/dropdown'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/maker.module.css'

const Maker = ({ teams, ranks, onSubmit }) => {
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const telephoneRef = useRef()
  const msgRef = useRef()
  const themeRef = useRef()
  const teamRef = useRef()
  const rankRef = useRef()
  const fileRef = useRef()
  const formRef = useRef()

  const [themesType, setThemesType] = useState('Gray')
  const [teamsType, setTeamsType] = useState('인사')
  const [ranksType, setRanksType] = useState('부장')
  const [themesToggle, setthemesToggle] = useState(false)
  const [teamsToggle, setTeamsToggle] = useState(false)
  const [ranksToggle, setRanksToggle] = useState(false)

  const [themes] = useState([
    { id: 1, value: 'Gray' },
    { id: 2, value: 'Blue' },
    { id: 3, value: 'yellow' },
  ])

  const submitForm = (e) => {
    e.preventDefault()
    const card = {
      uid: Date.now(),
      name: nameRef.current.value,
      msg: msgRef.current.value,
      telephone: telephoneRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      theme: themeRef.current.innerText,
      team: teamRef.current.innerText,
      rank: rankRef.current.innerText,
      imgURL: '',
    }
    formRef.current.reset()
    onSubmit(card)
  }

  const onThemesOpen = () => {
    setthemesToggle(!themesToggle)
    setTeamsToggle(false)
    setRanksToggle(false)
  }

  const onTeamsOpen = () => {
    setTeamsToggle(!teamsToggle)
    setthemesToggle(false)
    setRanksToggle(false)
  }

  const onRanksOpen = () => {
    setRanksToggle(!ranksToggle)
    setthemesToggle(false)
    setTeamsToggle(false)
  }

  const handleThemesValue = (value) => {
    onThemesOpen()
    setThemesType(value)
  }

  const handleTeamsValue = (value) => {
    onTeamsOpen()
    setTeamsType(value)
  }

  const handleRanksValue = (value) => {
    onRanksOpen()
    setRanksType(value)
  }

  return (
    <div className="col-sm-4 col-md-9">
      <div className="wrapper">
        <form className={styles.authForm} ref={formRef} onSubmit={submitForm}>
          <label
            className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.profileBtn}`}
            htmlFor="profile"
          >
            <FiCamera /> Add to profile
          </label>
          <input
            ref={fileRef}
            type="file"
            id="profile"
            accept="image/png, image/jpeg"
          />

          <p className={styles.formLabel}>이름</p>
          <input
            className={styles.authFormInput}
            type="text"
            id="name"
            ref={nameRef}
            placeholder="Name"
          />

          <p className={styles.formLabel}>이메일</p>
          <input
            className={styles.authFormInput}
            type="email"
            id="email"
            ref={emailRef}
            placeholder="Email"
          />

          <p className={styles.formLabel}>휴대전화</p>
          <input
            className={styles.authFormInput}
            type="text"
            id="phone"
            ref={phoneRef}
            placeholder="Phone"
          />

          <p className={styles.formLabel}>유선전화</p>
          <input
            className={styles.authFormInput}
            type="text"
            id="telephone"
            ref={telephoneRef}
            placeholder="TelePhone"
          />

          <p className={styles.formLabel}>남긴말</p>
          <textarea
            className={styles.authFormInput}
            id="msg"
            ref={msgRef}
            cols="30"
            rows="3"
            maxLength="100"
            placeholder="Msg"
          ></textarea>

          <div className={styles.typeBtnList}>
            <div
              className={`
              ${styles.themes}
              ${styles.typeBtnItem} 
              ${themesToggle && styles.isActive}`}
            >
              <p className={styles.formLabel}>색상 테마</p>
              <button
                className={`
                ${buttonStyles.baseBtn}
                ${buttonStyles.ghostBtn}
                ${styles.typeBtn}`}
                ref={themeRef}
                onClick={onThemesOpen}
                type="button"
              >
                {themesType}
              </button>
              <div className={styles.themesList}>
                <DropDown listItems={themes} handleEvent={handleThemesValue} />
              </div>
            </div>

            <div
              className={`
              ${styles.teams} 
              ${styles.typeBtnItem} 
              ${teamsToggle && styles.isActive}`}
            >
              <p className={styles.formLabel}>부서명</p>
              <button
                className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.typeBtn}`}
                onClick={onTeamsOpen}
                ref={teamRef}
                type="button"
              >
                {teamsType}
              </button>
              <div className={styles.teamsList}>
                <DropDown listItems={teams} handleEvent={handleTeamsValue} />
              </div>
            </div>

            <div
              className={`
              ${styles.ranks}
              ${styles.typeBtnItem}
              ${ranksToggle && styles.isActive}
                `}
            >
              <p className={styles.formLabel}>직급명</p>
              <button
                className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.typeBtn}`}
                onClick={onRanksOpen}
                ref={rankRef}
                type="button"
              >
                {ranksType}
              </button>
              <div className={styles.ranksList}>
                <DropDown listItems={ranks} handleEvent={handleRanksValue} />
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
