import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/chase-testwuide/" target='_blank'><AiOutlineLinkedin size="30px"/></a>
        <a href="https://github.com/ctestwuide" target='_blank'><FaGithub size="30px"/></a>
    </div>

  )
}

export default HeaderSocials