import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import Enrollment from './pages/Enrollment'
import Sum from './pages/Sum'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<About />}/>
        <Route path='/contact-us' element={<Contact />}/>
        <Route path='/contact-us/:id' element={<ProductDetails />}/>
        <Route path='/enrollment' element={<Enrollment />}/>
        <Route path='/sum' element={<Sum />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
