import React from 'react'
import { BiArrowBack, BiReset } from 'react-icons/bi'

const SearchForm = () => {
  return (
    <>
      <header>
        <button type="button">
          <BiArrowBack />
        </button>

        <button type="button">
          <BiReset />
          Reset All
        </button>
      </header>
    </>
  )
}

export default SearchForm
