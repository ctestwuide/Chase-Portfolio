import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineSchool} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import {FiFolder} from 'react-icons/fi'
import {LuContact} from 'react-icons/lu'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')


  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#' ? 'active' : ''}><MdOutlineSchool /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#' ? 'active' : ''}><FiFolder /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#' ? 'active' : ''}><LuContact /></a>
    </nav>
  )
}

export default Nav