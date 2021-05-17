import React from 'react'

import './styles/main.css'

import SideNavigation from './components/side-navigation'
import SearchPage from './components/search-page'
import ResultPage from './components/result-page'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <SideNavigation></SideNavigation>
        <SearchPage></SearchPage>
        <ResultPage></ResultPage>
      </div>
    </div>
  )
}

export default App
