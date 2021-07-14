import React, { useEffect, useRef, useState } from 'react'
import renderMarkdown from '../../utils/render-markdown'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/work.module.css'
import markdownStyle from '../../styles/modules/markdown.module.css'

const Work = ({ onMenuChange, index }) => {
  const input = useRef()
  const textarea = useRef()

  const [isEditing, setIsEditing] = useState(true)
  const [preview, setPreview] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isAble, setIsAble] = useState(false)

  useEffect(() => {
    onMenuChange('work')
  })

  useEffect(() => {
    if (title && content) {
      setIsAble(true)
    } else {
      setIsAble(false)
    }
  }, [content, title])

  const updateContent = () => {
    setContent(textarea.current.value)
  }

  const updateTitle = () => {
    setTitle(input.current.value)
  }

  const startEditing = () => {
    setIsEditing(true)
  }

  const stopEditing = () => {
    if (content !== '') {
      setIsEditing(false)
    } else {
      deleteSection(index)
    }
  }

  const deleteSection = () => {
    deleteSection(index)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.metaKey) {
      stopEditing()
    }
  }

  const onSubmit = (e) => {
    setIsEditing(false)
    e.preventDefault()
  }

  const onTogglePrview = () => {
    setPreview(!preview)
  }

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      <div className="wrapper">
        <div className={styles.workWrapper}>
          <h1>Work List</h1>
          {isEditing && (
            <section className={styles.editor}>
              <header className={styles.editorHeader}>
                <h2>
                  Markdown Editor — Only press button to save
                  <span role="img" aria-label="flower">
                    🌹
                  </span>
                </h2>
              </header>
              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    ref={input}
                    onChange={updateTitle}
                    type="text"
                    placeholder="제목"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <textarea
                    ref={textarea}
                    onChange={updateContent}
                    onKeyDown={handleKeyDown}
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
          )}
          {preview && (
            <section className={styles.preview} onClick={startEditing}>
              <div
                dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
                className={markdownStyle.renderer}
              />
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default Work
