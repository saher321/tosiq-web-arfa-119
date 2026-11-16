import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router'

const AuthRoutes = () => {
  const [ isLoggedIn, setIsLoggedin ] = useState(true)
  return isLoggedIn ? <Navigate to="/" /> :
  <Outlet />
}

export default AuthRoutes
