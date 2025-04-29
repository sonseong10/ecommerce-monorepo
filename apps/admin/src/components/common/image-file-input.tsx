/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useRef, useState } from 'react'
import { FiCamera } from 'react-icons/fi'

import type ImageUploader from 'service/image-uploader'

const ImageFileInput = (props: {
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
      {!loding ? (
        <label htmlFor="profile">
          <FiCamera aria-hidden /> <span>{props.name || 'Add to profile'}</span>
        </label>
      ) : (
        <div>
          <span className="visually-hidden">로딩중</span>
        </div>
      )}
      <input ref={fileRef as any} type="file" id="profile" accept="image/*" onChange={onChange} />
    </>
  )
}

export default memo(ImageFileInput)
