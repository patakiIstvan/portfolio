import React from 'react'
import './navbar.scss'

function Navbar({ toggleNav }) {
  return (
    <header className="navbar">
      <div className="logo">
        <span>Pataki István</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects"> Projects</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
      <i onClick={toggleNav} className="menuIcon uil uil-bars"></i>
    </header>
  )
}

export default Navbar