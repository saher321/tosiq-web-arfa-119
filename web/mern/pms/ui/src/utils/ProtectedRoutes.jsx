import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = () => {
  const [ isLoggedIn, setIsLoggedin ] = useState(true)
  return isLoggedIn ? <Outlet /> :
  <Navigate to="/auth/login" />
}

export default ProtectedRoutes
