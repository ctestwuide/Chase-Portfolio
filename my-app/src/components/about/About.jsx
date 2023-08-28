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
              <h5>Business Development</h5>
              <small>4+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaAward className='about_icon'/>
              <h5>Data Analytics</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaLaptopCode className='about_icon'/>
              <h5>Coding</h5>
              <small>2+ Years Studying</small>
            </article>


          </div>

          <p>
          In the last five years within the manufacturing industry, I've faced many challenges and have refined my expertise as a Business Development Manager. 
          As I approach the completion of my Master's degree in Business from Cornell University in December 2023, 
          I am exporing new career opportunities. My focus spans across several sectors including
          accounting, finance, analytics, consulting, and 
          software development. I'm receptive to roles both domestically in the US and on the international stage, 
          and I hold the necessary rights to work in the UK.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About