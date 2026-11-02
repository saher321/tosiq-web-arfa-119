import React from 'react'
import { Link } from 'react-router'

const Dashboard = () => {
  return (
    <div>
      Dashboard, <Link to="/auth/login">Logout</Link>
    </div>
  )
}

export default Dashboard
