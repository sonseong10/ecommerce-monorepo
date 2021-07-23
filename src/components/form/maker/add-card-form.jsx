import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  validateEmail,
  validateName,
  validatePhone,
} from '../../../utils/validation'

import TeamsDropdown from '../../common/dropdown/teams-dropdown'
import RanksDropdown from '../../common/dropdown/ranks-dropdown'
import ThemesDropdown from '../../common/dropdown/themes-dropdown'

import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/maker.module.css'

const AddCardForm = ({ FileInput, createCard, dropDown, dark }) => {
  const history = useHistory()

  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const telephoneRef = useRef()
  const msgRef = useRef()
  const themeRef = useRef()
  const teamRef = useRef()
  const rankRef = useRef()
  const formRef = useRef()

  const [file, setFile] = useState({ fileName: null, fileURL: null })
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [submit, setSubmit] = useState(true)

  useEffect(() => {
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !phoneRef.current.value
    ) {
      setSubmit(true)
      return
    } else {
      if (nameError || emailError || phoneError) {
        setSubmit(true)
      } else {
        setSubmit(false)
      }
    }
  }, [nameError, emailError, phoneError])

  const nameValidate = ({ currentTarget: { value } }) => {
    onValidate(value, validateName, setNameError)
  }

  const emailValidate = ({ currentTarget: { value } }) => {
    onValidate(value, validateEmail, setEmailError)
  }

  const phoneValidate = ({ currentTarget: { value } }) => {
    onValidate(value, validatePhone, setPhoneError)
  }

  const onValidate = (value, valudate, errorType) => {
    if (valudate(value)) {
      errorType(false)
    } else {
      errorType(true)
    }
  }

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    const card = {
      login: true,
      name: nameRef.current.value,
      msg: msgRef.current.value || '',
      telephone: telephoneRef.current.value || '',
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      theme: themeRef.current.innerText,
      team: teamRef.current.innerText,
      rank: rankRef.current.innerText,
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    }
    formRef.current.reset()
    setFile({ fileName: null, fileURL: null })
    createCard(card)
    history.push('/main')
  }

  return (
    <form
      className={`${styles.authForm} ${dark && styles.isDark}`}
      ref={formRef}
      onSubmit={submitForm}
    >
      <FileInput name={file.fileName} onFileChange={onFileChange}></FileInput>

      <label htmlFor="name" className={styles.formLabel}>
        이름*
      </label>
      <input
        className={`${styles.authFormInput} ${nameError && styles.isError}`}
        type="text"
        id="name"
        ref={nameRef}
        placeholder="Name"
        onChange={nameValidate}
      />
      {nameError && (
        <strong className={styles.errorText}>
          공백없는 영어 혹은 한글만 입력 가능합니다.
        </strong>
      )}

      <label htmlFor="email" className={styles.formLabel}>
        이메일*
      </label>
      <input
        className={`${styles.authFormInput} ${emailError && styles.isError}`}
        type="email"
        id="email"
        ref={emailRef}
        placeholder="Email"
        onChange={emailValidate}
      />
      {emailError && (
        <strong className={styles.errorText}>이메일 형식에 어긋납니다.</strong>
      )}

      <label htmlFor="phone" className={styles.formLabel}>
        휴대전화*
      </label>
      <input
        className={`${styles.authFormInput} ${phoneError && styles.isError}`}
        type="text"
        id="phone"
        ref={phoneRef}
        placeholder={`Phone (Include "-")`}
        onChange={phoneValidate}
      />
      {phoneError && (
        <strong className={styles.errorText}>
          휴대폰 양식에 어긋납니다 ( "-" 필수)
        </strong>
      )}

      <label htmlFor="telephone" className={styles.formLabel}>
        유선전화
      </label>
      <input
        className={styles.authFormInput}
        type="text"
        id="telephone"
        ref={telephoneRef}
        placeholder="TelePhone"
      />

      <label htmlFor="msg" className={styles.formLabel}>
        남긴말
      </label>
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
        <ThemesDropdown
          dropDown={dropDown}
          themeRef={themeRef}
          dark={dark}
        ></ThemesDropdown>

        <TeamsDropdown
          dropDown={dropDown}
          teamRef={teamRef}
          dark={dark}
        ></TeamsDropdown>

        <RanksDropdown
          dropDown={dropDown}
          rankRef={rankRef}
          dark={dark}
        ></RanksDropdown>
      </div>

      <button
        className={`${buttonStyles.baseBtn} ${buttonStyles.primaryBtn} ${styles.submitBtn}`}
        type="submit"
        disabled={submit}
      >
        {submit ? 'Disable' : 'Create'}
      </button>
    </form>
  )
}

export default AddCardForm
