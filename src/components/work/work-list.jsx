import React from 'react'
import WorkItem from './work-item'

const WorkList = ({ works, renderMarkdown, update, deleteWork }) => {
  return (
    <ul>
      {Object.keys(works).map((key) => (
        <WorkItem
          work={works[key]}
          key={key}
          renderMarkdown={renderMarkdown}
          update={update}
          deleteWork={deleteWork}
        ></WorkItem>
      ))}
    </ul>
  )
}

export default WorkList
