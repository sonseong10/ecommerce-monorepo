import React, { memo, useRef, useState } from 'react'
import { FiCamera } from 'react-icons/fi'

import buttonStyles from '../../styles/modules/buttons.module.css'
import commonStyles from '../../styles/modules/common.module.css'
import styles from '../../styles/modules/maker.module.css'
import type ImageUploader from 'service/image-uploader'

const ImageFileInput = memo(
  (props: {
    imageUploader?: ImageUploader
    name: string
    onFileChange?: (obj: { name?: string; url?: string }) => void
  }) => {
    const [loding, setLoding] = useState(false)
    const fileRef = useRef()

    const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoding(true)
      const uploaded = await props.imageUploader!.upload(event.target.files![0])
      setLoding(false)
      props.onFileChange!({
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
