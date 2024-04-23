import React from 'react'
import WorkItem from './work-item'
import NotFound from '../errors/not-found'
import styles from '../../styles/modules/work-list.module.css'

interface IWorkListProps {
  works?: {
    [key: string]: {
      contents: string
      time: number
      title: string
    }
  }
  renderMarkdown: (source?: string) => string
  updateWork: (work: { contents: string; time: number; title: string }) => void
  deleteWork: (work: { contents: string; time: number; title: string }) => void
  dark: boolean
}

const WorkList = ({ works, renderMarkdown, updateWork, deleteWork, dark }: IWorkListProps) => {
  return (
    <>
      {works && Object.keys(works).length ? (
        <ul className={`${styles.workList} ${dark && styles.isDark}`}>
          {Object.keys(works).map(key => (
            <WorkItem
              work={works[key]}
              key={key}
              renderMarkdown={renderMarkdown}
              updateWork={updateWork}
              deleteWork={deleteWork}
              dark={dark}
            ></WorkItem>
          ))}
        </ul>
      ) : (
        <NotFound dark={dark}></NotFound>
      )}
    </>
  )
}

export default WorkList
