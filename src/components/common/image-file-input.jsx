import React, { memo, useRef, useState } from 'react'
import { FiCamera } from 'react-icons/fi'

import buttonStyles from '../../styles/modules/buttons.module.css'
import commonStyles from '../../styles/modules/common.module.css'
import styles from '../../styles/modules/maker.module.css'

const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
  const [loding, setLoding] = useState(false)
  const fileRef = useRef()

  const onChange = async (event) => {
    setLoding(true)
    const uploaded = await imageUploader.upload(event.target.files[0])
    setLoding(false)
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
  }

  return (
    <>
      {!loding && (
        <label
          className={`
          ${buttonStyles.baseBtn}
          ${buttonStyles.ghostBtn}
          ${styles.profileBtn}
          ${name ? styles.isSucceed : styles.isEmpty} `}
          htmlFor="profile"
        >
          <FiCamera aria-hidden /> <span>{name || 'Add to profile'}</span>
        </label>
      )}
      {loding && (
        <div className={commonStyles.lodingSmall}>
          <span className="visually-hidden">로딩중</span>
        </div>
      )}
      <input
        ref={fileRef}
        type="file"
        id="profile"
        accept="image/*"
        onChange={onChange}
      />
    </>
  )
})

export default ImageFileInput
