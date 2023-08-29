import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Education from './components/education/Education.jsx'
import Experience from './components/experience/Experience.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Cport from './components/cport/Cport.jsx'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Experience />
      <Portfolio />
      <Cport />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  )
}

export default App