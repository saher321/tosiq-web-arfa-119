import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <NavLink to={"/"}>Home</NavLink> | {" "}
        <NavLink to={"/contact-us"}>Contact us</NavLink>
    </div>
  )
}

export default Navbar