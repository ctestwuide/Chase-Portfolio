import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineSchool} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import {FiFolder} from 'react-icons/fi'
import {LuContact} from 'react-icons/lu'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#education"><MdOutlineSchool /></a>
      <a href="#experience"><MdWorkOutline /></a>
      <a href="#portfolio"><FiFolder /></a>
      <a href="#contact"><LuContact /></a>
    </nav>
  )
}

export default Nav