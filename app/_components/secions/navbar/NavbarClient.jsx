'use client'
import React, { useState } from 'react'
import './navbar.scss'
import Image from 'next/image'

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
      <div onClick={props.toggleNav} className="menuIcon">
        {/* <iconify-icon icon="uil:bars" width="25" height="25"></iconify-icon> */}
        <Image width={25} height={25} src={'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="25" height="25" viewBox="0 0 24 24"%3E%3Cg id="feBar0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"%3E%3Cg id="feBar1" fill="white"%3E%3Cpath id="feBar2" d="M3 16h18v2H3v-2Zm0-5h18v2H3v-2Zm0-5h18v2H3V6Z"%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'} />
      </div>
    </header>
  )
}

function Slidebar(props) {

  return (
    <div className={props.navMenu ? 'isOpen slidebar' : 'isClose slidebar'} onClick={props.toggleNav} >
      <Image className="menuicon" width={32} height={32} src={'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="25" height="25" viewBox="0 0 24 24"%3E%3Cpath fill="white" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"%2F%3E%3C%2Fsvg%3E'} />
      {props.navItems}
    </div >
  )
}