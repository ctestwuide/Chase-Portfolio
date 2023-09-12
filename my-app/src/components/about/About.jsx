import React from 'react'
import './about.css'
import Cat from '../../assets/9.10.23 Headshot 1 - Copy.png'
import {FaAward} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'
import {TbDeviceAnalytics} from 'react-icons/tb'


const About = () => {
  return (
    <section id="about">
      <h5 className="mini-text">Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Cat} alt="me and a cat" />
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
              <TbDeviceAnalytics className='about_icon'/>
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
            <strong className='about-thing'>Job Search:</strong> Seeking a new full-time position for January 2024 <br/> 
            <strong className='about-thing'>Target Roles:</strong> Finance (Private Equity), Accounting (Tax), Consulting, Business Development, Software Development <br/>
            <strong className='about-thing'>My Ideal Company:</strong> Startups! I love getting my hands dirty in a variety of areas within
             a company. My diverse skillset and education give me the necessary competencies to successfully attack projects in
            a variety of areas. I'm also interested in working for large, innovative companies where I can learn best practices and witness new industry trends. <br/>
              

            <strong className='about-thing'>Current Employment: </strong>  
            In the last five years working in business development at Torginol, I've faced many challenges that inspired me to enhance my skills in a
             variety of areas to further add value to the company. 
            As I approach the completion of my Master's degree in Business from Cornell University in December 2023, 
            I'm eager to change the trajectory of my career with a new challenge. My focus spans across several sectors including
            accounting, finance, analytics, consulting, and 
            software development. I'm receptive to roles both domestically in the US and on the international stage, 
            and I hold the necessary rights to work in the UK.
            </p>

          <a href="#contact" className='btn btn-primary'>Interested in hiring me? Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About