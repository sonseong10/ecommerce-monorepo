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
import type ImageUploader from 'service/image-uploader'
import type DropDown from 'utils/dropdown'

interface IAddCardForm {
  FileInput: React.MemoExoticComponent<
    (props: {
      imageUploader?: ImageUploader
      name: string
      onFileChange?: (obj: { name?: string; url?: string }) => void
    }) => React.JSX.Element
  >
  createCard: (card: {
    email: string
    fileName: string
    fileURL: string
    login: boolean
    msg: string
    name: string
    phone: string
    rank: string
    team: string
    telephone: string
    theme: string
  }) => void
  dropDown: DropDown
  dark: boolean
}
const AddCardForm = memo(
  ({ FileInput, createCard, dropDown, dark }: IAddCardForm) => {
    const navigate = useNavigate()

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const telephoneRef = useRef<HTMLInputElement>(null)
    const msgRef = useRef<HTMLTextAreaElement>(null)
    const themeRef = useRef<HTMLButtonElement>(null)
    const teamRef = useRef<HTMLButtonElement>(null)
    const rankRef = useRef<HTMLButtonElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const [file, setFile] = useState<{
      fileName: string | undefined
      fileURL: string | undefined
    }>({
      fileName: undefined,
      fileURL: undefined,
    })
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

    const nameValidate = ({
      currentTarget: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      onValidate(value, validateName, setNameError)
    }

    const emailValidate = ({
      currentTarget: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      onValidate(value, validateEmail, setEmailError)
    }

    const phoneValidate = ({
      currentTarget: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      onValidate(value, validatePhone, setPhoneError)
    }

    const onValidate = (
      value: string,
      valudate: (value: string) => boolean,
      errorType: (v: boolean) => void
    ) => {
      if (valudate(value)) {
        errorType(false)
      } else {
        errorType(true)
      }
    }

    const onFileChange = (file: { name?: string; url?: string }) => {
      setFile({
        fileName: file.name,
        fileURL: file.url,
      })
    }

    const submitForm = (e: React.FormEvent) => {
      e.preventDefault()

      const card = {
        login: true,
        name: nameRef.current!.value,
        msg: msgRef.current!.value || '',
        telephone: telephoneRef.current!.value || '',
        phone: phoneRef.current!.value,
        email: emailRef.current!.value,
        theme: themeRef.current!.innerText,
        team: teamRef.current!.innerText,
        rank: rankRef.current!.innerText,
        fileName: file.fileName || '',
        fileURL: file.fileURL || '',
      }

      if (formRef?.current) {
        formRef.current.reset()
      }

      setFile({ fileName: undefined, fileURL: undefined })
      createCard(card)

      navigate('/main')
    }

    return (
      <form
        className={`${styles.authForm} ${dark && styles.isDark}`}
        ref={formRef}
        onSubmit={submitForm}
      >
        <FileInput
          name={file.fileName ? file.fileName : ''}
          onFileChange={onFileChange}
        ></FileInput>

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
