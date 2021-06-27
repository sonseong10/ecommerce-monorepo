import React from 'react'
import SearchForm from './search-form'
import styles from '../../styles/modules/search_page.module.css'

const SearchPage = ({ isOpen, dropDown, handleFormOpen }) => {
  return (
    <div
      className={`col-md-3 sm-hidden ${styles.isClose} ${
        isOpen && styles.isOpen
      }`}
    >
      <div className="wrapper">
        <article className={styles.article}>
          <h2 className="visually-hidden">Search Form</h2>
          <SearchForm
            isOpen={isOpen}
            dropDown={dropDown}
            handleFormOpen={handleFormOpen}
          ></SearchForm>
        </article>
      </div>
    </div>
  )
}

export default SearchPage
