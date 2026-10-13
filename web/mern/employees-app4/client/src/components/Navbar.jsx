
import React from 'react'
import { NavLink } from 'react-router'
import { House, Users } from 'lucide-react'

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/', icon: House },
    { name: 'Employees', path: '/employees', icon: Users },
  ]

  return (
    <nav className="my-5 w-fit mx-auto">
      <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1.5 shadow-xl shadow-black/5 backdrop-blur-xl">
        {links.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-black  text-gray-100 shadow-sm'
                  : 'text-gray-600 hover:bg-white/20 hover:text-gray-900'
              }`
            }
          >
            <Icon size={17} strokeWidth={1.8} />
            <span>{name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
