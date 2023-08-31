import React from 'react'
import './testimonials.css'
import George from '../../assets/george.jpg'
import Jeff from '../../assets/Jeff.jpg'
import Kim from '../../assets/kim.jpeg'
import Obama from '../../assets/obama.jpeg'
import Warren from '../../assets/warren.jpeg'

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
    review: 'This man could have single-handedly founded the US. Perhaps I call him daddy?\
    Thou would not have even needed dentures.'
  },
  {
    key: 2,
    avatar: Jeff,
    name: 'Jeff Bezos',
    review: 'Amazon is AFRAID of this man. My knees literally shake.\
    I fear for my company\'s future if I can\'t get Chase to work for me.'
  },
  {
    key: 3,
    avatar: Warren,
    name: 'Warren Buffett',
    review: 'Chase is an excellent investment. To be frank, he\'s basically the next Apple.\
    Hire him while you can. I know that it\'s the smart thing to do.'
  },
  {
    key: 4,
    avatar: Obama,
    name: 'Barack Obama',
    review: 'I have no clue who Chase is. Stop asking for a quote about him. Please leave me alone. I must go be with my wife, Michelle.'
  },
  {
    key: 5,
    avatar: Kim,
    name: 'Kim Jong Un',
    review: '누군가 체이스에게 일자리를 주지 않는다면 나는 미국에 핵폭탄을 터뜨릴 것입니다. 난 진지해. 내가 죽음을 속였을 때 나를 깨운 사람은 체이스였습니다.'
  }
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 className='mini-text'>Reviews from trusted sources</h5>
      <h2>Testimonials</h2>

      <Swiper modules={[Pagination, Navigation]} className="container testimonials__container"
      pagination={{ clickable: true}} >
        {
          data.map(({key, avatar, name, review}) => {
            return (
              <SwiperSlide autoHeight={false} key={key} className="testimonial">
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