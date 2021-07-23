import React from 'react'
import WorkItem from './work-item'
import NotFound from '../errors/not-found'
import styles from '../../styles/modules/work-list.module.css'

const WorkList = ({
  MarkDown,
  works,
  renderMarkdown,
  updateWork,
  deleteWork,
  dark,
}) => {
  return (
    <>
      {Object.keys(works).length ? (
        <ul className={`${styles.workList} ${dark && styles.isDark}`}>
          {Object.keys(works).map((key) => (
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
