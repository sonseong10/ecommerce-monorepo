import React, { useEffect, useRef, useState } from 'react'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/work.module.css'
import markdownStyle from '../../styles/modules/markdown.module.css'

interface IAddWorkFormProps {
  createWork: (work: { contents: string; time: number; title: string }) => void
  renderMarkdown: (source?: string) => string
  dark: boolean
  userId?: string
}

const AddWorkForm = ({
  createWork,
  renderMarkdown,
  dark,
}: IAddWorkFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [title, setTitle] = useState('')
  const [contents, setContent] = useState('')
  const [preview, setPreview] = useState(false)
  const [isAble, setIsAble] = useState(false)

  useEffect(() => {
    if (title && contents) {
      setIsAble(true)
    } else {
      setIsAble(false)
    }
  }, [contents, title])

  const updateContent = () => {
    setContent(textareaRef.current!.value)
  }

  const updateTitle = () => {
    setTitle(inputRef.current!.value)
  }

  const onTogglePrview = () => {
    setPreview(!preview)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const work = {
      time: Date.now(), // NOTE: uid
      title: title,
      contents: contents,
    }
    createWork(work)
    setIsAble(false)
    setTitle('')
    setContent('')
    formRef.current?.reset()
  }

  return (
    <>
      <section className={styles.editor}>
        <form className={styles.form} ref={formRef}>
          <div className={styles.inputGroup}>
            <input
              ref={inputRef}
              onChange={updateTitle}
              type="text"
              placeholder="제목"
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea
              ref={textareaRef}
              onChange={updateContent}
              placeholder="내용"
            />
          </div>
        </form>
        <footer className={styles.footer}>
          <button
            type="button"
            className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.previewBtn}`}
            onClick={onTogglePrview}
          >
            {preview ? '미리보기 숨기기' : '미리보기'}
          </button>

          <button
            type="submit"
            className={`${buttonStyles.baseBtn} ${buttonStyles.primaryBtn} ${styles.editorBtn}`}
            disabled={!isAble}
            onClick={onSubmit}
          >
            Save
          </button>
        </footer>
      </section>

      {preview && (
        <section className={styles.preview}>
          <div
            dangerouslySetInnerHTML={{ __html: renderMarkdown(contents) }}
            className={`${markdownStyle.renderer} 
                ${dark && markdownStyle.isDark}`}
          ></div>
        </section>
      )}
    </>
  )
}

export default AddWorkForm
