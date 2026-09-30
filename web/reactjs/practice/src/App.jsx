import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App