import React, { useRef, useState } from 'react'
import { BiPencil, BiTrash } from 'react-icons/bi'
import { formatDate } from '../../utils/filters'

import buttonStyles from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/work-list.module.css'
import markdownStyle from '../../styles/modules/markdown.module.css'

const WorkItem = ({ work, renderMarkdown, updateWork, deleteWork, dark }) => {
  const textareaRef = useRef()

  const { title, contents, time } = work
  const date = formatDate(time)

  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const closeWorkItem = () => {
    setIsOpen(false)
  }

  const updateContent = (event) => {
    updateWork({ ...work, contents: event.currentTarget.value })
  }

  const startEditing = () => {
    setIsEdit(!isEdit)
  }

  const stopEditing = () => {
    setIsEdit(false)
  }

  const deleteSection = () => {
    deleteWork(work)
  }

  return (
    <li className={styles.workItem}>
      <button
        className={styles.openBtn}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        type="button"
      >
        <h2 className={styles.title}>{title}</h2>
        <strong className={styles.date}>{date}</strong>
      </button>

      <div
        className={`${styles.workItemContents} 
      ${isOpen && styles.isOpen}`}
      >
        <div className={styles.contentsLeft}>
          {isEdit ? (
            <textarea
              defaultValue={contents}
              ref={textareaRef}
              onChange={updateContent}
              onBlur={stopEditing}
              autoFocus
            ></textarea>
          ) : (
            <>
              <div
                dangerouslySetInnerHTML={{ __html: renderMarkdown(contents) }}
                className={`${markdownStyle.renderer} 
                ${dark && markdownStyle.isDark}`}
              />
              <footer className={styles.footer}>
                <button
                  className={`${buttonStyles.baseBtn} ${buttonStyles.ghostBtn} ${styles.closeBtn}`}
                  onClick={closeWorkItem}
                  type="button"
                >
                  Close
                </button>
              </footer>
            </>
          )}
        </div>
        <aside className={styles.contentsRight}>
          <h3 className="visually-hidden">toolbar</h3>
          <button
            className={`${styles.toolBtn} ${styles.editBtn} ${
              isEdit && styles.isActive
            }`}
            type="button"
            onClick={startEditing}
          >
            <BiPencil></BiPencil>
          </button>
          <button
            className={`${styles.toolBtn} ${styles.removeBtn}`}
            type="button"
            onClick={deleteSection}
          >
            <BiTrash></BiTrash>
          </button>
        </aside>
      </div>
    </li>
  )
}

export default WorkItem
