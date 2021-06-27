import React from 'react'
import { BiSearch } from 'react-icons/bi'
import MemberList from '../member-card/member-list'

import buttonStyle from '../../styles/modules/buttons.module.css'
import styles from '../../styles/modules/search_form.module.css'

const ResultPage = ({ cards, isOpen, handleFormOpen }) => {
  const layout = isOpen ? 'col-md-6' : 'col-md-9'

  return (
    <div className={`col-sm-4 ${layout}`}>
      <div className="wrapper">
        <header className={styles.header}>
          <button
            className={`${buttonStyle.baseBtn} ${styles.searchBtn}`}
            type="button"
            onClick={handleFormOpen}
          >
            <BiSearch aria-hidden />
            <span>{isOpen ? 'Search Close' : 'Search Open'}</span>
          </button>
        </header>
        <MemberList cards={cards}></MemberList>
      </div>
    </div>
  )
}

export default ResultPage
