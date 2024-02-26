import React from 'react';
const body = document.querySelector('body')


const HeaderNav = () => {
    const handleDark = () => {
        body.classList.toggle('dark')
      }
  return (
    <div>HeaderNav
        <h1>ECOMMERCE FINAL</h1>
        <button onClick={handleDark}>Dark Mode</button>
    </div>
  )
}

export default HeaderNav;