import React from 'react'
import './footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Chase Testwuide</a>

      <ul className='personalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Skills and Technologies</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/chase-testwuide/" target='_blank'><AiOutlineLinkedin /></a>
        <a href="https://www.instagram.com/ctest_weed/" target='_blank'><BsInstagram /></a>
        <a href="https://wa.me/+19206274599" target='_blank'><BsWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2023 Chase Testwuide</small>
      </div>
    </footer>
  )
}

export default Footer