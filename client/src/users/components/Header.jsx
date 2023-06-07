import React from 'react'
import './header.css'

import logo_marne from'../assets/logoMarne_partenariat_white.png'

const Header = () => {
  return (
    <div className='Header'>

      <div className="logo">
        <img src={logo_marne} alt="logo_marne_white" />
      </div>

    </div>
  )
}

export default Header