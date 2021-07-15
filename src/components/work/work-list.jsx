import React from 'react'
import WorkItem from './work-item'

const WorkList = ({
  MarkDown,
  works,
  renderMarkdown,
  updateWork,
  deleteWork,
}) => {
  return (
    <ul>
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
  )
}

export default WorkList
