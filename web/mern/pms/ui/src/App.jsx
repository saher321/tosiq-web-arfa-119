import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './pages/auth/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* auth routes */}
        <Route path='/auth/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
