import React from 'react'
import SearchForm from './search-form'
import styles from '../../styles/modules/search_page.module.css'

const SearchPage = ({ onSearchOpen, searchIsOpen, teams, ranks }) => {
  return (
    <div
      className={`col-md-3 sm-hidden ${styles.isClose} ${
        searchIsOpen && styles.isOpen
      }`}
    >
      <div className="wrapper">
        <article className={styles.article}>
          <h2 className="visually-hidden">Search Form</h2>
          <SearchForm
            onSearchOpen={onSearchOpen}
            teams={teams}
            ranks={ranks}
          ></SearchForm>
        </article>
      </div>
    </div>
  )
}

export default SearchPage
