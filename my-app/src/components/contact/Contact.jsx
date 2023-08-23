import React, { useRef } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rlz0lov', 'template_p8k8osh', form.current, 'kKESlBbQ6iwEOPwM2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <section id="contact"> 
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>cdt56@cornell.edu</h5>
            <a href="mailto:cdt56@cornell.edu" target='_blank'>Send an email</a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon' />
            <h4>Mobile</h4>
            <h5>+19206274599</h5>
            <a href="sms:+19206274599" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+19206274599</h5>
            <a href="https://wa.me/+19206274599" target='_blank'>Send a WhatsApp message</a>
          </article>
          
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
