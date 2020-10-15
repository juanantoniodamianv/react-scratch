import React from 'react'
import { Navbar } from './components/Nav/NavBar'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'

function App () {
  return (
    <div className='App'>
      <Navbar />
      App
      <Router>
        <Home path='/' />
        <Dashboard path='dashboard' />
      </Router>
    </div>
  )
}

export default App
