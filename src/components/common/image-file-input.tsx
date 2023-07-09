import React, { memo, useRef, useState } from 'react'
import { FiCamera } from 'react-icons/fi'

import buttonStyles from '../../styles/modules/buttons.module.css'
import commonStyles from '/src/styles/modules/common.module.css'
import styles from '/src/styles/modules/maker.module.css'

const ImageFileInput = memo(
  (props: { imageUploader: any; name: string; onFileChange: any }) => {
    const [loding, setLoding] = useState(false)
    const fileRef = useRef()

    const onChange = async (event: { target: { files: any[] } }) => {
      setLoding(true)
      const uploaded = await props.imageUploader.upload(event.target.files[0])
      setLoding(false)
      props.onFileChange({
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
          ${props.name ? styles.isSucceed : styles.isEmpty} `}
            htmlFor="profile"
          >
            <FiCamera aria-hidden />{' '}
            <span>{props.name || 'Add to profile'}</span>
          </label>
        )}
        {loding && (
          <div className={commonStyles.lodingSmall}>
            <span className="visually-hidden">로딩중</span>
          </div>
        )}
        <input
          ref={fileRef as any}
          type="file"
          id="profile"
          accept="image/*"
          onChange={onChange as any}
        />
      </>
    )
  }
)

export default ImageFileInput
