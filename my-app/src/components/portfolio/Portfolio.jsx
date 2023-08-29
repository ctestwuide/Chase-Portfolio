import React from 'react'
import './portfolio.css'
import Torginol from "../../assets/torginol.png"
import Start from "../../assets/startup.jpg"
import OCR from "../../assets/ocr.png"
import Skana from "../../assets/skana.png"
import Funky from "../../assets/funky.png"
import Crystal from "../../assets/crystal.jpg"

const data = [
  {
    id: 1,
    image: Start,
    title: 'Start-Up Consultancy during COVID-19',
    description: 'Amidst the pandemic, I extended consultancy to a budding entrepreneur envisaging a venture in manufacturing and promoting tourism merchandise for Midwest attractions. My contributions spanned trend analysis, market gap identification, and fostering connections with regional artists for product design.',
  },
  {
    id: 2,
    image: Torginol,
    title: 'In-Depth Acquisition Analysis for Torginol',
    description: 'I orchestrated a holistic industry report, market research, financial analysis, and onsite evaluation of a local manufacturing entity. I focused on competitive research analysis and market leaders. Presenting my insightful findings to Torginol\'s executive ensemble, they subsequently acted in alignment with my recommendation.',
  },
  {
    id: 3,
    image: OCR,
    title: 'Digital Record Keeping Overhaul at Torginol',
    description: 'I initiated and solely implemented the Chrono Scan OCR software to revolutionize Torginol\'s accounting documentation. This innovative move not only streamlined financial operations but also slashed accounting expenses by 20% in just its debut week — a success that propelled my ascent to a business development role.',
  },
  {
    id: 4,
    image: Crystal,
    title: 'AR Inconsistencies Uncovered ',
    description: 'Leveraging Crystal Reporting, I delved into data from Sage 100 ERP to explore profitability discrepancies among Torginol\'s top customers. This inquiry shed light on a payment processing inconsistency, pinpointing a cash shortfall of nearly $100,000 in the first half of the fiscal year.',
  },
  {
    id: 5,
    image: Skana,
    title: 'Inventory System Migration at Skana Aluminum',
    description: 'During a data analytics contract, I steered the transition to a fresh spare parts inventory system, representing over $10 million in assets. To guarantee accuracy, I conducted a hands-on inventory audit within the plant, aligning physical counts with system estimates.',
  },
  {
    id: 6,
    image: Funky,
    title: 'Software Implementation at Funky Town',
    description: 'In the embryonic phase of Funky Town Dance Studio, I collaborated intensively with the owner. Wearing multiple hats, I orchestrated the financial system\'s establishment, managed payroll, and integrated software to facilitate credit card payments, monitor attendance, and log instructor hours.',
  }
]


const Portfolio = () => {
  
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Business Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description}) => {
            return (
              
                <article key={id} className="portfolio__item">

                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <p>{description}</p>
                  </div>
      
                </article>
              )
            })
        }

      </div>
    </section>
  )
}

export default Portfolio