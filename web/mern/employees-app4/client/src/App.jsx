import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Employees from './pages/employees/Employees'
import AddEmployee from './pages/employees/AddEmployee'
import EditEmployee from './pages/employees/EditEmployee'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/employees/add' element={<AddEmployee />} />
        <Route path='/employees/edit/:id' element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App