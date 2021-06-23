import React, { useRef } from 'react'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/maker.module.css'

import RanksDropdown from '../common/dropdown/ranks-dropdown'
import TeamsDropdown from '../common/dropdown/teams-dropdown'
import ThemesDropdown from '../common/dropdown/themes-dropdown'

const EditCardForm = ({ FileInput, card, dropDown, updateCard }) => {
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const telephoneRef = useRef()
  const msgRef = useRef()
  const themeRef = useRef()
  const teamRef = useRef()
  const rankRef = useRef()

  const { name, email, phone, telephone, msg, theme, team, rank, fileName } = card

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const onChange = (event)=>{
    if(event.currentTarget === null) {
      return;
    }
    event.preventDefault()
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }
  return (
    <form className={styles.authForm} onSubmit={updateCard}>
      <FileInput name={fileName} onFileChange={onFileChange} />

      <p className={styles.formLabel}>이름</p>
      <input
        className={styles.authFormInput}
        type="text"
        id="name"
        ref={nameRef}
        defaultValue={name}
        placeholder="Name"
      />

      <p className={styles.formLabel}>이메일</p>
      <input
        className={styles.authFormInput}
        type="email"
        id="email"
        ref={emailRef}
        defaultValue={email}
        placeholder="Email"
        onChange={onChange}
      />

      <p className={styles.formLabel}>휴대전화</p>
      <input
        className={styles.authFormInput}
        type="text"
        id="phone"
        ref={phoneRef}
        defaultValue={phone}
        placeholder="Phone"
        onChange={onChange}
      />

      <p className={styles.formLabel}>유선전화</p>
      <input
        className={styles.authFormInput}
        type="text"
        id="telephone"
        ref={telephoneRef}
        defaultValue={telephone}
        placeholder="TelePhone"
        onChange={onChange}
      />

      <p className={styles.formLabel}>남긴말</p>
      <textarea
        className={styles.authFormInput}
        id="msg"
        cols="30"
        rows="3"
        maxLength="100"
        placeholder="Msg"
        ref={msgRef}
        defaultValue={msg}
        onChange={onChange}
      ></textarea>

      <div className={styles.typeBtnList}>
        <ThemesDropdown
          dropDown={dropDown}
          themeValue={theme}
          themeRef={themeRef}
        ></ThemesDropdown>

        <TeamsDropdown dropDown={dropDown} teamValue={team} teamRef={teamRef}></TeamsDropdown>

        <RanksDropdown dropDown={dropDown} rankValue={rank} rankRef={rankRef}></RanksDropdown>
      </div>
      <button
        className={`${buttonStyles.baseBtn} ${buttonStyles.primaryBtn} ${styles.submitBtn}`}
        type="submit"
      >
        Ok
      </button>
    </form>
  )
}

export default EditCardForm
