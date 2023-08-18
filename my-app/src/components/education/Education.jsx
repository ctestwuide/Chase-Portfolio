import React from 'react'
import './education.css'
import {FaCheck} from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education">
      <h5>My Educational Background</h5>
      <h2>Accounting ○ Finance ○ Marketing ○ Software Development</h2>

      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <h3>Univeristy of Wisconsin</h3>
          </div>

          <ul className="education__list">
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            
          </ul>

        </article>

        <article className="education">
          <div className="education__head">
            <h3>Univeristy of Glasgow</h3>
          </div>

          <ul className="education__list">
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            
          </ul>

        </article>

        <article className="education">
          <div className="education__head">
            <h3>Cornell Univeristy</h3>
          </div>

          <ul className="education__list">
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            <li>
              <FaCheck className='education__list-icon' />
              <p>random text here about what I lerned at Madison</p>
            </li>
            
          </ul>

        </article>

      </div>
    </section>
  )
}

export default Education