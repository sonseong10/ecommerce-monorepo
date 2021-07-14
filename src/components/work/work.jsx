import React, { useEffect, useState } from 'react'
import renderMarkdown from '../../utils/render-markdown'
import { BiEdit } from 'react-icons/bi'

import AddWorkForm from './add-work-form'
import WorkList from './work-list'

import buttonStyle from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/work.module.css'

const Work = ({ onMenuChange, userId, workRepository }) => {
  const [works, setWorks] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onMenuChange('work')
  })

  useEffect(() => {
    const stopSync = workRepository.syncWorks(userId, (works) => {
      setWorks(works)
    })
    return () => {
      stopSync()
    }
  }, [userId, workRepository])

  const createOrUpdateCard = (work) => {
    setWorks((works) => {
      const updated = { ...works }
      updated[userId] = work
      return updated
    })
    workRepository.saveWork(userId, work)
  }

  const deleteWork = (work) => {
    setWorks((works) => {
      const updated = { ...works }
      delete updated[work.time]
      return updated
    })
    workRepository.removeWork(userId, work)
  }

  const onOpenAddForm = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      <div className="wrapper">
        <div className={styles.workWrapper}>
          <header className={styles.header}>
            <h1>Work List</h1>
            <button
              className={`${buttonStyle.baseBtn} ${buttonStyle.ghostBtn} ${styles.openBtn} `}
              onClick={onOpenAddForm}
              type="button"
            >
              <BiEdit></BiEdit>
            </button>
            <span className={styles.toolTip}>
              {isOpen ? 'Close Form' : 'Open Form'}
            </span>
          </header>
          {isOpen && (
            <AddWorkForm
              userId={userId}
              createWork={createOrUpdateCard}
              renderMarkdown={renderMarkdown}
            ></AddWorkForm>
          )}
          <WorkList
            works={works}
            renderMarkdown={renderMarkdown}
            update={createOrUpdateCard}
            deleteWork={deleteWork}
          ></WorkList>
        </div>
      </div>
    </div>
  )
}

export default Work
