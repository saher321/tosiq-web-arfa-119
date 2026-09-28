import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <div className='my-5 rounded flex items-center justify-between bg-sky-700 text-white p-3'>
        <div>LIST</div>
        <nav className='flex gap-5'>
            <NavLink to={'/'}>
                Home
            </NavLink>
            
            <NavLink to={'/user-data'}>
                Users
            </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
