import React from 'react'
import { NavLink } from 'react-router'
import { useData } from '../store/store.js'

const Navbar = () => {
  const name = useData(state => state.name)
  const links = [
    {url: '/', text: "Home"},
    {url: '/about-us', text: "About"},
    {url: '/contact-us', text: "Contact"},
    {url: '/enrollment', text: "Enrollment"},
    {url: '/sum', text: "Sum"},
  ]
  return (
    <div className='flex bg-black text-white gap-5 w-fit mx-auto m-5 p-3 rounded'>
        <div className="logo">{name}</div>
        <div className="links">
            <nav className='flex gap-3'>
                { links.map((link, i) => {
                  return (
                    <NavLink key={i} 
                    className={({isActive}) => isActive ? "text-green-300" : "hover:text-green-300"} 
                    to={link.url}>
                      {link.text}
                    </NavLink>
                  )
                }) }
            </nav>
        </div>

    </div>
  )
}

export default Navbar
