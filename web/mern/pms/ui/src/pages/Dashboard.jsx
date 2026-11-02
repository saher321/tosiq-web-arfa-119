import React from 'react'
import { Link } from 'react-router'
import RoleBasedLayout from '../layouts/RoleBasedLayout'

const Dashboard = () => {
  return (
    <RoleBasedLayout>
      <div>
        <div className='bg-teal-800 text-white p-10 rounded-xl'>
          Welcome back, NAME
        </div>
      </div>
    </RoleBasedLayout>
  )
}

export default Dashboard
