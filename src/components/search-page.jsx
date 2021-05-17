import React from 'react'
import SearchForm from './search-form'
import styles from '../styles/modules/search_page.module.css'

const SearchPage = () => {
  return (
    <div className="col-md-3 sm-hidden">
      <div className={styles.wrapper}>
        <SearchForm></SearchForm>
      </div>
    </div>
  )
}

export default SearchPage
