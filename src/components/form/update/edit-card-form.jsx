import React, { useState } from 'react'
import {
  validateEmail,
  validateName,
  validatePhone,
} from '../../../utils/validation'

import RanksDropdown from '../../common/dropdown/ranks-dropdown'
import TeamsDropdown from '../../common/dropdown/teams-dropdown'
import ThemesDropdown from '../../common/dropdown/themes-dropdown'

import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/maker.module.css'

const EditCardForm = ({
  FileInput,
  userCard,
  dropDown,
  updateCard,
  deleteCard,
  dark,
}) => {
  const { name, email, phone, telephone, msg, fileName } = userCard

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  const nameValidate = (event) => {
    if (validateName(event.currentTarget.value)) {
      setNameError(false)
    } else {
      setNameError(true)
    }
    onChange(event, validateName(event.currentTarget.value))
  }

  const emailValidate = (event) => {
    if (validateEmail(event.currentTarget.value)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    onChange(event, validateEmail(event.currentTarget.value))
  }

  const phoneValidate = (event) => {
    if (validatePhone(event.currentTarget.value)) {
      setPhoneError(false)
    } else {
      setPhoneError(true)
    }
    onChange(event, validatePhone(event.currentTarget.value))
  }

  const onFileChange = (file) => {
    updateCard({
      ...userCard,
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const onChange = ({ currentTarget }, validated = true) => {
    if (currentTarget.value === null) {
      return
    }
    if (!validated) {
      return
    } else {
      updateCard({
        ...userCard,
        [currentTarget.id]: currentTarget.value,
      })
    }
  }

  const onRemove = () => {
    deleteCard()
  }

  return (
    <form className={`${styles.authForm} ${dark && styles.isDark}`}>
      <FileInput name={fileName} onFileChange={onFileChange} />

      <p className={styles.formLabel}>이름</p>
      <input
        className={`${styles.authFormInput} ${nameError && styles.isError}`}
        type="text"
        id="name"
        defaultValue={name}
        placeholder="Name"
        onChange={nameValidate}
      />
      {nameError && (
        <strong className={styles.errorText}>
          should only be used in English or Korean without spaces.
        </strong>
      )}

      <p className={styles.formLabel}>이메일</p>
      <input
        className={`${styles.authFormInput} ${emailError && styles.isError}`}
        type="email"
        id="email"
        defaultValue={email}
        placeholder="Email"
        onChange={emailValidate}
      />
      {emailError && (
        <strong className={styles.errorText}>
          Please maintain the email format.
        </strong>
      )}

      <p className={styles.formLabel}>휴대전화</p>
      <input
        className={`${styles.authFormInput} ${phoneError && styles.isError}`}
        type="text"
        id="phone"
        defaultValue={phone}
        placeholder="Phone"
        onChange={phoneValidate}
      />
      {phoneError && (
        <strong className={styles.errorText}>
          Please enter your phone number including "-"
        </strong>
      )}

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
          dark={dark}
        ></ThemesDropdown>

        <TeamsDropdown
          dropDown={dropDown}
          updateCard={updateCard}
          userCard={userCard}
          dark={dark}
        ></TeamsDropdown>

        <RanksDropdown
          dropDown={dropDown}
          updateCard={updateCard}
          userCard={userCard}
          dark={dark}
        ></RanksDropdown>
      </div>

      <button
        type="button"
        className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.removeBtn}`}
        onClick={onRemove}
      >
        Delete account
      </button>
    </form>
  )
}

export default EditCardForm
