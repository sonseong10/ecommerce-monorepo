import React, { memo } from 'react'
import Slider from 'react-slick'

import { settings } from '../../utils/carousel'

import carouselImg1 from '../../assets/images/carousel/carousel-img1.jpg'
import carouselImg2 from '../../assets/images/carousel/carousel-img2.jpg'
import carouselImg3 from '../../assets/images/carousel/carousel-img3.jpg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'

const SlickCarousel = memo(() => {
  const listItems = [
    { id: 1, imgURL: carouselImg1, route: '/main' },
    { id: 2, imgURL: carouselImg2, route: '/work' },
    { id: 3, imgURL: carouselImg3, route: '/search' },
  ]
  return (
    <Slider {...settings}>
      {listItems.map((item) => (
        <div key={item.id}>
          <Link to={item.route}>
            <figure>
              <img src={item.imgURL} alt="" />
              <figcaption className="visually-hidden">링크 슬라이더</figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </Slider>
  )
})

export default SlickCarousel
