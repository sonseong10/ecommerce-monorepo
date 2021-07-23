import React, { useEffect, useState } from 'react'
import renderMarkdown from '../../utils/render-markdown'
import { BiEdit } from 'react-icons/bi'

import AddWorkForm from './add-work-form'
import WorkList from './work-list'

import buttonStyle from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/work.module.css'

const Work = ({
  onMenuChange,
  userId,
  works,
  createWork,
  updateWork,
  deleteWork,
  dark,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onMenuChange('work')
  })

  const onOpenAddForm = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      <div className={`${styles.workGroup} ${dark && styles.isDark}`}>
        <header className={styles.header}>
          <h1>Work List</h1>
          <button
            className={`${buttonStyle.baseBtn} ${buttonStyle.ghostBtn} ${styles.openBtn} `}
            onClick={onOpenAddForm}
            type="button"
          >
            <BiEdit aria-hidden />
            <span className="visually-hidden">업무 추가화면 열기</span>
          </button>
          <span className={styles.toolTip}>
            {isOpen ? 'Close Form' : 'Open Form'}
          </span>
        </header>
        {isOpen && (
          <AddWorkForm
            userId={userId}
            createWork={createWork}
            renderMarkdown={renderMarkdown}
          />
        )}
        <WorkList
          MarkDown={renderMarkdown}
          works={works}
          renderMarkdown={renderMarkdown}
          updateWork={updateWork}
          deleteWork={deleteWork}
          dark={dark}
        />
      </div>
    </div>
  )
}

export default Work
