import React from 'react'

import './styles/main.css'

import SideNavigation from './components/side-navigation'
import SearchForm from './components/search-form'
import ResultPage from './components/result-page'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <SideNavigation></SideNavigation>
        <SearchForm></SearchForm>
        <ResultPage></ResultPage>
      </div>
    </div>
  )
}

export default App
