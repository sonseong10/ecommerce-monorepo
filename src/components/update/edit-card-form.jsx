import React from 'react'

import styles from '../../styles/modules/maker.module.css'

import RanksDropdown from '../common/dropdown/ranks-dropdown'
import TeamsDropdown from '../common/dropdown/teams-dropdown'
import ThemesDropdown from '../common/dropdown/themes-dropdown'

const EditCardForm = ({ FileInput, userCard, dropDown, updateCard }) => {
  const { name, email, phone, telephone, msg, fileName } = userCard

  const onFileChange = (file) => {
    updateCard({
      ...userCard,
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return
    }
    event.preventDefault()
    updateCard({
      ...userCard,
      [event.currentTarget.id]: event.currentTarget.value,
    })
  }

  return (
    <form className={styles.authForm}>
      <FileInput name={fileName} onFileChange={onFileChange} />

      <p className={styles.formLabel}>이름</p>
      <input
        className={styles.authFormInput}
        type="text"
        id="name"
        defaultValue={name}
        placeholder="Name"
        onChange={onChange}
      />

      <p className={styles.formLabel}>이메일</p>
      <input
        className={styles.authFormInput}
        type="email"
        id="email"
        defaultValue={email}
        placeholder="Email"
        onChange={onChange}
      />

      <p className={styles.formLabel}>휴대전화</p>
      <input
        className={styles.authFormInput}
        type="text"
        id="phone"
        defaultValue={phone}
        placeholder="Phone"
        onChange={onChange}
      />

      <p className={styles.formLabel}>유선전화</p>
      <input
        className={styles.authFormInput}
        type="text"
        id="telephone"
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
        defaultValue={msg}
        onChange={onChange}
      ></textarea>

      <div className={styles.typeBtnList}>
        <ThemesDropdown
          dropDown={dropDown}
          updateCard={updateCard}
          userCard={userCard}
        ></ThemesDropdown>

        <TeamsDropdown
          dropDown={dropDown}
          updateCard={updateCard}
          userCard={userCard}
        ></TeamsDropdown>

        <RanksDropdown
          dropDown={dropDown}
          updateCard={updateCard}
          userCard={userCard}
        ></RanksDropdown>
      </div>
    </form>
  )
}

export default EditCardForm
