import React from 'react'
import './about.css'
import Cat from '../../assets/chase-cat.jpg'
import {FaAward} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Cat} alt="me and a cat image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaLaptopCode className='about_icon'/>
              <h5>Coding</h5>
              <small>3+ Years Coding</small>
            </article>

            <article className='about__card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

          </div>

          <p>
            This is where I'll write all about my Experience
            and how I love to learn and that I actually know things
            and that they should hire me for some reason
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About