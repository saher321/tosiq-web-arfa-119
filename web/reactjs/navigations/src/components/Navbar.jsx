import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <div className="logo">LOG.</div>
        <div className="links">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about-us">About</NavLink>
                <NavLink to="/contact-us">Contact</NavLink>
            </nav>
        </div>

    </div>
  )
}

export default Navbar
