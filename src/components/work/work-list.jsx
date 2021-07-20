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
}) => {
  return (
    <>
      {Object.keys(works).length ? (
        <ul className={styles.workList}>
          {Object.keys(works).map((key) => (
            <WorkItem
              MarkDown={MarkDown}
              work={works[key]}
              key={key}
              renderMarkdown={renderMarkdown}
              updateWork={updateWork}
              deleteWork={deleteWork}
            ></WorkItem>
          ))}
        </ul>
      ) : (
        <NotFound></NotFound>
      )}
    </>
  )
}

export default WorkList
