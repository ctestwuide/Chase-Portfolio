import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id="education">
      <h5 className='mini-text'>My Academic Background</h5>
      <h2 id="edu"><strong>Education</strong></h2>
      <h2>Accounting ○ Finance ○ Marketing ○ Analytics ○ Software Development</h2>

      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <h3>Univeristy of Wisconsin</h3>
            <h5>Bachelor of Business Administration</h5>
            <h5>Accounting and Marketing</h5>
          </div>

          <ul className="education__list">
            <li>
              <p>○ Financial reporting to comply with GAAP and IFRS</p>
            </li>
            <li>
              <p>○ Management and cost accounting to understand product costs and overhead</p>
            </li>
            <li>
              <p>○ Taxation and tax avoidance strategies</p>
            </li>
            <li>
              <p>○ Business analytics and optimization using Microsoft Excel</p>
            </li>
            <li>
              <p>○ Marketing pricing strategies to strategically maximize revenue</p>
            </li>
            <li>
              <p>○ Market and industry research to examine new areas for business development</p>
            </li>
            
          </ul>

        </article>

        <article className="education">
          <div className="education__head">
            <h3>Univeristy of Glasgow</h3>
            <h5>Master of Science</h5>
            <h5>Info Tech & Software Development</h5>
          </div>

          <ul className="education__list">
            <li>
              <p>○ Relational database modeling for data storage</p>
            </li>
            <li>
              <p>○ Internet technologies to design and deploy web applications</p>
            </li>
            <li>
              <p>○ Agile software development for working in a team to create a business application</p>
            </li>
            <li>
              <p>○ Cybersecurity management and fundamentals to stay secure</p>
            </li>
            <li>
              <p>○ Algorithms and data structures to improve software efficiency</p>
            </li>

            
          </ul>

        </article>

        <article className="education">
          <div className="education__head">
            <h3>Cornell Univeristy</h3>
            <h5>Master of Business</h5>
            <h5>Accounting and Finance</h5>
          </div>

          <ul className="education__list">
          <li>
              <p>○ Financial Modeling: 3-Statement Model, DCF Valuation, LBO, M&A, Comps</p>
          </li>
          <li>
              <p>○ Taxation of corporations and flow-through entities and tax avoidance strategies</p>
          </li>
          <li>
              <p>○ Business data visualization using Tableau and Power BI</p>
          </li>
          <li>
              <p>○ Data analytics using Alteryx</p>
          </li>
          <li>
              <p>○ Financial statement analysis to identify acquisition targets</p>
          </li>
            
          </ul>

        </article>

      </div>
    </section>
  )
}

export default Education