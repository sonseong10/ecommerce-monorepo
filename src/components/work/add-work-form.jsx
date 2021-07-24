import React, { useEffect, useRef, useState } from 'react'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/work.module.css'
import markdownStyle from '../../styles/modules/markdown.module.css'

const AddWorkForm = ({ createWork, renderMarkdown, dark }) => {
  const inputRef = useRef()
  const textareaRef = useRef()
  const formRef = useRef()

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
    setContent(textareaRef.current.value)
  }

  const updateTitle = () => {
    setTitle(inputRef.current.value)
  }

  const onTogglePrview = () => {
    setPreview(!preview)
  }

  const onSubmit = (e) => {
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
    formRef.current.reset()
  }

  return (
    <>
      <section className={styles.editor}>
        <header className={styles.editorHeader}>
          <h2>
            Markdown Editor — Only press button to save
            <span role="img" aria-label="flower">
              🌹
            </span>
          </h2>
        </header>
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
            {preview ? 'Hide Preview' : 'Show Preview'}
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
