import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Chase-No-Background.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header header__container">
        <h5>Hello I'm</h5>
        <h1>Chase Testwuide</h1>
        <h5 className="text-light">Business Professional & Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Picture of me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>


      </div>
    </header>
  )
}

export default Header