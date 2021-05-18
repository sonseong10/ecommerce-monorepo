import React from 'react'
import SearchForm from './search-form'
import styles from '../styles/modules/search_page.module.css'

const SearchPage = () => {
  return (
    <div className={`col-md-3 sm-hidden ${styles.isClose} ${styles.isOpen}`}>
      <div className="wrapper">
        <article>
          <h2 className="visually-hidden">Search Form</h2>
          <SearchForm></SearchForm>
        </article>
      </div>
    </div>
  )
}

export default SearchPage
