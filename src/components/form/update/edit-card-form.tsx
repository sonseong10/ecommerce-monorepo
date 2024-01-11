import React, { useState } from 'react'
import {
  validateEmail,
  validateName,
  validatePhone,
} from '../../../utils/validation'

import RanksDropdown from './components/ranks-dropdown'

import buttonStyles from '../../../styles/modules/buttons.module.css'
import styles from '../../../styles/modules/maker.module.css'
import type DropDown from 'utils/dropdown'
import type ImageUploader from 'service/image-uploader'
import type { ICardVo } from 'types/grobal-type'
import ThemesDropdown from './components/themes-dropdown'
import TeamsDropdown from './components/teams-dropdown'

interface IEditCardFormProps {
  FileInput: React.MemoExoticComponent<
    (props: {
      imageUploader?: ImageUploader
      name: string
      onFileChange?: (obj: { name?: string; url?: string }) => void
    }) => React.JSX.Element
  >
  userCard?: ICardVo
  dropDown: DropDown
  updateCard: (card: ICardVo) => void
  deleteCard: () => void
  dark: boolean
}

const EditCardForm = ({
  FileInput,
  userCard,
  dropDown,
  updateCard,
  deleteCard,
  dark,
}: IEditCardFormProps) => {
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  const nameValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validateName(event.currentTarget.value)) {
      setNameError(false)
    } else {
      setNameError(true)
    }
    onChange(event, validateName(event.currentTarget.value))
  }

  const emailValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validateEmail(event.currentTarget.value)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    onChange(event, validateEmail(event.currentTarget.value))
  }

  const phoneValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validatePhone(event.currentTarget.value)) {
      setPhoneError(false)
    } else {
      setPhoneError(true)
    }
    onChange(event, validatePhone(event.currentTarget.value))
  }

  const onFileChange = (file: { name?: string; url?: string }) => {
    updateCard({
      ...userCard!,
      fileName: file.name!,
      fileURL: file.url!,
    })
  }

  const onChange = (
    {
      currentTarget,
    }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    validated = true
  ) => {
    if (currentTarget.value === null) {
      return
    }
    if (!validated) {
      return
    } else {
      updateCard({
        ...userCard!,
        [currentTarget.id]: currentTarget.value,
      })
    }
  }

  const onRemove = () => {
    deleteCard()
  }

  return (
    <form className={`${styles.authForm} ${dark && styles.isDark}`}>
      <FileInput
        name={userCard?.fileName ? userCard?.fileName : ''}
        onFileChange={onFileChange}
      />

      <label htmlFor="name" className={styles.formLabel}>
        이름
      </label>
      <input
        className={`${styles.authFormInput} ${nameError && styles.isError}`}
        type="text"
        id="name"
        defaultValue={userCard?.name}
        placeholder="Name"
        onChange={nameValidate}
      />
      {nameError && (
        <strong className={styles.errorText}>
          공백없는 영어 혹은 한글만 입력 가능합니다.
        </strong>
      )}

      <label htmlFor="email" className={styles.formLabel}>
        이메일
      </label>
      <input
        className={`${styles.authFormInput} ${emailError && styles.isError}`}
        type="email"
        id="email"
        defaultValue={userCard?.email}
        placeholder="Email"
        onChange={emailValidate}
      />
      {emailError && (
        <strong className={styles.errorText}>이메일 형식에 어긋납니다.</strong>
      )}

      <label htmlFor="phone" className={styles.formLabel}>
        휴대전화
      </label>
      <input
        className={`${styles.authFormInput} ${phoneError && styles.isError}`}
        type="text"
        id="phone"
        defaultValue={userCard?.phone}
        placeholder="Phone"
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
        defaultValue={userCard?.telephone}
        placeholder="TelePhone"
        onChange={onChange}
      />

      <label htmlFor="msg" className={styles.formLabel}>
        남긴말
      </label>
      <textarea
        className={styles.authFormInput}
        id="msg"
        cols={30}
        rows={3}
        maxLength={100}
        placeholder="Msg"
        defaultValue={userCard?.msg}
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
        회원 탈퇴
      </button>
    </form>
  )
}

export default EditCardForm
