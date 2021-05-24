import React, { useState } from 'react'
import SearchForm from './search-form'
import styles from '../../styles/modules/search_page.module.css'

const SearchPage = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(true)

  const onSearchOpen = () => {
    setSearchIsOpen(!searchIsOpen)
  }

  return (
    <div
      className={`col-md-3 sm-hidden ${styles.isClose} ${
        searchIsOpen && styles.isOpen
      }`}
    >
      <div className="wrapper">
        <article className={styles.article}>
          <h2 className="visually-hidden">Search Form</h2>
          <SearchForm onSearchOpen={onSearchOpen}></SearchForm>
        </article>
      </div>
    </div>
  )
}

export default SearchPage
