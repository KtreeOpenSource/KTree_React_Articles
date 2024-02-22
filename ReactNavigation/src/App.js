import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import NotFoundPage from './NotFoundPage'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<HomePage />} />
        {/* Catch-all route for not found pages */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
