import React from 'react'
// import Logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='navbar'>
        {/* <img src={Logo} alt="logo" className="logo" /> */}
        <div className="navlinks">
        <Link to='/features'>FEATURES</Link><br />
        <Link to='/pricing'>PRICING</Link><br />
        <Link to='/resources'>RESOURCES</Link>
        </div>
    </div>
    </>
  )
}

export default Nav