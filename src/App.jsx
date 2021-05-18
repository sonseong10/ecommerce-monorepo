import React, { useState } from 'react'

import './styles/main.css'

import SideNavigation from './components/side-navigation'
import SearchPage from './components/search-page'
import ResultPage from './components/result-page'
import HomePage from './components/home/home-page'

const App = () => {
  const [menus, setmenus] = useState('home')

  const handleHomeActive = () => {
    setmenus('home')
  }

  const handleSearchActive = () => {
    setmenus('search')
  }

  return (
    <div className="container">
      <div className="row">
        <SideNavigation
          handleHomeActive={handleHomeActive}
          handleSearchActive={handleSearchActive}
          menus={menus}
        ></SideNavigation>
        {menus === 'home' ? (
          <HomePage></HomePage>
        ) : (
          <>
            <SearchPage></SearchPage>
            <ResultPage></ResultPage>
          </>
        )}
      </div>
    </div>
  )
}

export default App
