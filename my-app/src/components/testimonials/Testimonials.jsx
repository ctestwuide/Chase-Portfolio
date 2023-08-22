import React, { useRef, useState } from 'react'
import './testimonials.css'
import George from '../../assets/george.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const data = [
  {
    key: 1,
    avatar: George,
    name: 'George Washington',
    review: 'the baddest baddie around. fucking amazing chap that could definite\
    baddie around.'
  },
  {
    key: 2,
    avatar: George,
    name: 'George Washington',
    review: 'the baddest baddie around. fucking amazing chap that could definite\
    baddie around.'
  },
  {
    key: 3,
    avatar: George,
    name: 'George Washington',
    review: 'the baddest baddie around. fucking amazing chap that could definite\
    baddie around.'
  },
  {
    key: 4,
    avatar: George,
    name: 'George Washington',
    review: 'the baddest baddie around. fucking amazing chap that could definite\
    baddie around.'
  },
  {
    key: 5,
    avatar: George,
    name: 'George Washington',
    review: 'the baddest baddie around. fucking amazing chap that could definite\
    baddie around.'
  }
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper modules={[Pagination, Navigation]} className="container testimonials__container"
      pagination={{ clickable: true}} >
        {
          data.map(({key, avatar, name, review}) => {
            return (
              <SwiperSlide key={key} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>



    </section>
  )
}

export default Testimonials