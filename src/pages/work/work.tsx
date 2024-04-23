import React, { useState } from 'react'
import renderMarkdown from '../../utils/render-markdown'
import { BiEdit } from 'react-icons/bi'

import AddWorkForm from './add-work-form'
import WorkList from './work-list'

import buttonStyle from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/work.module.css'

interface IWorkProps {
  userId: string
  works:
    | {
        [key: string]: {
          contents: string
          time: number
          title: string
        }
      }
    | undefined
  createWork: (work: { contents: string; time: number; title: string }) => void
  updateWork: (work: { contents: string; time: number; title: string }) => void
  deleteWork: (work: { contents: string; time: number; title: string }) => void
  dark: boolean
}
const Work = ({ userId, works, createWork, updateWork, deleteWork, dark }: IWorkProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenAddForm = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={`${styles.workGroup} ${dark && styles.isDark}`}>
        <header className={styles.header}>
          <h1>일지관리</h1>
          <button
            className={`${buttonStyle.baseBtn} ${buttonStyle.primaryBtn} ${styles.openBtn} `}
            onClick={onOpenAddForm}
            type="button"
          >
            <BiEdit aria-hidden />
            <span>{isOpen ? '작성 취소' : '일지 작성'}</span>
          </button>
        </header>
        {isOpen && <AddWorkForm userId={userId} createWork={createWork} renderMarkdown={renderMarkdown} dark={dark} />}
        <WorkList
          works={works}
          renderMarkdown={renderMarkdown}
          updateWork={updateWork}
          deleteWork={deleteWork}
          dark={dark}
        />
      </div>
    </>
  )
}

export default Work
