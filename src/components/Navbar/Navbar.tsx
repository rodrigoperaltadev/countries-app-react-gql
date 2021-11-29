import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <header className='navbar-wrapper'>
      <div className='navbar__title' onClick={handleClick}>COUNTRIES APP</div>
    </header>
  )
}

export default Navbar
