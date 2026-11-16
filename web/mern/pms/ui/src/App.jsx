import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import AuthRoutes from './utils/AuthRoutes'
import ProtectedRoutes from './utils/ProtectedRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* auth routes */}
        {/* <Route element={<AuthRoutes />}> */}
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/forgot-password' element={<ForgotPassword />} />
          <Route path='/auth/reset-password' element={<ResetPassword />} />
        {/* </Route> */}

        {/* <Route element={<ProtectedRoutes />}> */}
          <Route path='/' element={<Dashboard />} />
        {/* </Route> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
