import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* auth routes */}
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
