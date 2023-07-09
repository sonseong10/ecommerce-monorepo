import React, { memo, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

interface IAddCardForm {
  FileInput: any
  createCard: any
  dropDown: any
  dark: any
}
const AddCardForm = memo(
  ({ FileInput, createCard, dropDown, dark }: IAddCardForm) => {
    const navigate = useNavigate()

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const telephoneRef = useRef<HTMLInputElement>(null)
    const msgRef = useRef<HTMLTextAreaElement>(null)
    const themeRef = useRef<HTMLInputElement>(null)
    const teamRef = useRef<HTMLInputElement>(null)
    const rankRef = useRef<HTMLInputElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const [file, setFile] = useState({ fileName: null, fileURL: null })
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [submit, setSubmit] = useState(true)

    useEffect(() => {
      if (!nameRef.current || !emailRef.current || !phoneRef.current) {
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

    const nameValidate = ({ currentTarget: { value } }: any) => {
      onValidate(value, validateName, setNameError)
    }

    const emailValidate = ({ currentTarget: { value } }: any) => {
      onValidate(value, validateEmail, setEmailError)
    }

    const phoneValidate = ({ currentTarget: { value } }: any) => {
      onValidate(value, validatePhone, setPhoneError)
    }

    const onValidate = (value: any, valudate: any, errorType: any) => {
      if (valudate(value)) {
        errorType(false)
      } else {
        errorType(true)
      }
    }

    const onFileChange = (file: any) => {
      setFile({
        fileName: file.name,
        fileURL: file.url,
      })
    }

    const submitForm = (e: any) => {
      e.preventDefault()
      const card = {
        login: true,
        name: (nameRef.current! as any).value,
        msg: (msgRef.current! as any).value || '',
        telephone: (telephoneRef.current! as any).value || '',
        phone: (phoneRef.current! as any).value,
        email: (emailRef.current! as any).value,
        theme: (themeRef.current! as any).innerText,
        team: (teamRef.current! as any).innerText,
        rank: (rankRef.current! as any).innerText,
        fileName: file.fileName || '',
        fileURL: file.fileURL || '',
      }
      if (formRef?.current) {
        ;(formRef.current as any).reset()
      }
      setFile({ fileName: null, fileURL: null })
      createCard(card)
      navigate('/main')
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
          <strong className={styles.errorText}>
            이메일 형식에 어긋납니다.
          </strong>
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
          cols={30}
          rows={3}
          maxLength={100}
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
)

export default AddCardForm
