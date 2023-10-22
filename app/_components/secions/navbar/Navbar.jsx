'use client'
import React, { useState } from 'react'
import './navbar.scss'

function Navbar(props) {
  const [navMenu, setNavMenu] = useState(false)

  const toggleNav = () => {
    setNavMenu(!navMenu)
  }

  return (
    <>
      <Slidebar navMenu={navMenu} toggleNav={toggleNav} />
      <TopNavbar toggleNav={toggleNav} />
    </>
  )
}
export default Navbar

function TopNavbar(props) {
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
      <div onClick={props.toggleNav} className="menuIcon"><iconify-icon icon="uil:bars" width="25" height="25"></iconify-icon></div>
    </header>
  )
}

function Slidebar(props) {

  return (
    <div className={props.navMenu ? 'isOpen slidebar' : 'isClose slidebar'} onClick={props.toggleNav} >
      <i onClick={props.toggleNav} className="menuicon uil uil-times"></i>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
        </ul>
        <ul>
          <li><a href="#projects"> Projects</a></li>
        </ul>
        <ul>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
      <i className="menuIcon uil uil-bars"></i>
    </div >
  )
}