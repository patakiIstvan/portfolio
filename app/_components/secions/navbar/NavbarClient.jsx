'use client'
import React, { useState } from 'react'
import './navbar.scss'

function NavbarClient(props) {
  const [navMenu, setNavMenu] = useState(false)

  const toggleNav = () => {
    setNavMenu(!navMenu)
  }

  return (
    <>
      <Slidebar {...props} navMenu={navMenu} toggleNav={toggleNav} />
      <TopNavbar {...props} toggleNav={toggleNav} />
    </>
  )
}
export default NavbarClient

function TopNavbar(props) {
  return (
    <header className="navbar">
      {props.logo}
      {props.navItems}
      <div onClick={props.toggleNav} className="menuIcon"><iconify-icon icon="uil:bars" width="25" height="25"></iconify-icon></div>
    </header>
  )
}

function Slidebar(props) {

  return (
    <div className={props.navMenu ? 'isOpen slidebar' : 'isClose slidebar'} onClick={props.toggleNav} >
      <iconify-icon onClick={props.toggleNav} className="menuicon" icon="uil:times" />
      {props.navItems}
      <iconify-icon className="menuicon" icon="uil:bars" />
    </div >
  )
}