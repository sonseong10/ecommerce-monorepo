import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/modules/work-list.module.css'

interface IWorkLinkListProps {
  works: any
  dark: any
}
const WorkLinkList = ({ works, dark }: IWorkLinkListProps) => {
  return (
    <ul className={`${styles.workLinkList} ${dark && styles.isDark}`}>
      {Object.keys(works).length ? (
        Object.keys(works).map((key) => (
          <li className={styles.workItem} key={works[key].time}>
            <Link to="/work">{works[key].title}</Link>
          </li>
        ))
      ) : (
        <li className={styles.workItem}>
          <p className={styles.lsitNone}>리스트가 없습니다.</p>
          <Link className={styles.lsitNone} to="/work">
            업무 작성
          </Link>
        </li>
      )}
    </ul>
  )
}

export default WorkLinkList
