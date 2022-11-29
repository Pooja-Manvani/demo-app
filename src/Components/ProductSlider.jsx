import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import ProductCard from '../core/ProductCard'
// Import images
import product1 from '../assets/images/Product1.jpg'
import product2 from '../assets/images/Product2.jpg'
import product3 from '../assets/images/Product3.jpg'
import product4 from '../assets/images/Product4.jpg'
import product5 from '../assets/images/Product5.jpg'

export default function ProductSlider() {
  return (
    <div className='py-4 px-4 justify-content-center bg-yellow mx-5' >
      <Swiper 
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className='mySwiper'
        slidesPerView={5}
        spaceBetween={30}
      >
        <SwiperSlide className='w-10'>
          <ProductCard data={{imgSrc: product1}}  />
        </SwiperSlide>

        <SwiperSlide className='w-10'>
        <ProductCard data={{imgSrc: product2}} />
        </SwiperSlide>

        <SwiperSlide className='w-10'>
        <ProductCard data={{imgSrc: product3}} />
        </SwiperSlide>

        <SwiperSlide className='w-10'>
        <ProductCard data={{imgSrc: product4}} />
        </SwiperSlide>

        <SwiperSlide className='w-10'>
        <ProductCard data={{imgSrc: product5}} />
        </SwiperSlide>

        <SwiperSlide className='w-10'>
        <ProductCard data={{imgSrc: product2}} />
        </SwiperSlide>

        <SwiperSlide className='w-10'>
        <ProductCard data={{imgSrc: product1}} />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}
