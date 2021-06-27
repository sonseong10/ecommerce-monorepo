import React, { useState } from 'react'
import ResultPage from './result-page'
import SearchPage from './search-page'

const Search = ({ dropDown, cards }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleFormOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SearchPage
        isOpen={isOpen}
        dropDown={dropDown}
        handleFormOpen={handleFormOpen}
      ></SearchPage>

      <ResultPage
        handleFormOpen={handleFormOpen}
        cards={cards}
        isOpen={isOpen}
      ></ResultPage>
    </>
  )
}

export default Search
