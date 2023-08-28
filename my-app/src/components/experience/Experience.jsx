import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">

      <h5>The Skills I Have</h5>
      <h2>Technologies and Technical Skills</h2>

      <div className="container experience__container">

        <div className="experience__business">
          <h3>Business</h3>

          <div className="experience__content-bus">

            <article className='experience__details-bus'>
              <BsFillPatchCheckFill />
              <h4>Financial reporting per GAAP & IFRS</h4>
            </article>

            <article className='experience__details-bus'>
              <BsFillPatchCheckFill />
              <h4>Data visualization using Tableau and Power BI</h4>
            </article>

            <article className='experience__details-bus'>
              <BsFillPatchCheckFill />
              <h4>Data analytics with Alteryx</h4>
            </article>

            <article className='experience__details-bus'>
              <BsFillPatchCheckFill />
              <h4>Enterprise Resource Planning (ERP) systems</h4>
            </article>

            <article className='experience__details-bus'>
              <BsFillPatchCheckFill />
              <h4>Financial Modeling: 3-Statement, DCF, Comps, LBO, M&A</h4>
            </article>

            <article className='experience__details-bus'>
              <BsFillPatchCheckFill />
              <h4>Acquisition analysis and valuations</h4>
            </article>

            <article className='experience__details-bus'>
              <BsFillPatchCheckFill />
              <h4>Business and diversificaiton strategy</h4>
            </article>

            <article className='experience__details-bus'>
              <BsFillPatchCheckFill />
              <h4>Industry and market reserach</h4>
            </article>

            <article className='experience__details-bus'>
              <BsFillPatchCheckFill />
              <h4>Marketing and strategic pricing</h4>
            </article>

    
          </div>
        </div>

        <div className="experience__tech">
          <h3>Programming</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Git/GitHub</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience