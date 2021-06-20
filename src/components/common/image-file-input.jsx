import React, { useRef } from 'react'
import { FiCamera } from 'react-icons/fi'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/maker.module.css'

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const fileRef = useRef()

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0])
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
  }

  return (
    <div>
      <label
        className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.profileBtn}`}
        htmlFor="profile"
      >
        <FiCamera /> {name || 'Add to profile'}
      </label>
      <input
        ref={fileRef}
        type="file"
        id="profile"
        accept="image/*"
        onChange={onChange}
      />
    </div>
  )
}

export default ImageFileInput
