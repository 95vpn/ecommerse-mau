import React from 'react';
import { Link } from 'react-router-dom';
import './styles/headerNav.css'
const body = document.querySelector('body')


const HeaderNav = () => {
    const handleDark = () => {
        body.classList.toggle('dark')
      }
  return (
    <div className='header-nav-container'>
        <h1><Link to='/'>E-COMMERCE</Link></h1>
        <button onClick={handleDark}><box-icon name='moon'></box-icon></button>
        <nav>
          <ul className='header-nav-container-list'>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/purchases'>Purchases</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default HeaderNav;