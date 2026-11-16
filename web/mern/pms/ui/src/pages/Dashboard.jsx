import React from 'react'
import { Link } from 'react-router'
import RoleBasedLayout from '../layouts/RoleBasedLayout'
import { useAuth } from '../store/useAuth'

const Dashboard = () => {
  const loggedInUser = useAuth(state => state.loggedInUser)
  return (
    <RoleBasedLayout>
      <div>
        <div className='bg-teal-800 text-white p-10 rounded-xl'>
          Welcome back, {loggedInUser.name}
        </div>
      </div>
    </RoleBasedLayout>
  )
}

export default Dashboard
