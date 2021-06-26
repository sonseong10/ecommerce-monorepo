import React from 'react'
import ResultPage from './result-page'
import SearchPage from './search-page'

const Search = ({
  onSearchOpen,
  searchIsOpen,
  dropDown,
  handleSearchActive,
  cards,
}) => {
  return (
    <>
      <SearchPage
        onSearchOpen={onSearchOpen}
        dropDown={dropDown}
        handleSearchActive={handleSearchActive}
      ></SearchPage>

      <ResultPage searchIsOpen={searchIsOpen} cards={cards}></ResultPage>
    </>
  )
}

export default Search
