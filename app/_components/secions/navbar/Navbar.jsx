import React from 'react'
import NavbarClient from './NavbarClient'

const Navbar = () => {

  const navItems = <nav className="nav">
    <ul>
      <li><a href="/#home">Home</a></li>
      <li><a href="/#projects"> Projects</a></li>
      <li><a href="/#footer">Contact</a></li>
    </ul>
  </nav>;

  const logo = <div className="logo">
    <span>Pataki István</span>
  </div>;

  return (
    <NavbarClient
      navItems={navItems}
      logo={logo}
    />
  )
}

export default Navbar