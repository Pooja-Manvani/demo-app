import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import ProductCard from '../core/ProductCard'
import {getSliderData} from '../api/axios'

export default function ProductSlider() {
  const [sliderData,setSliderData] = useState([]);
  useEffect(() => {
    getSlider();
  }, []);
  const getSlider = async () => {
    const response = await getSliderData();
    setSliderData(response.data);
  };
  
  return (
    <div className=' py-4 px-4 justify-content-center mx-md-5' >
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className='mySwiper'
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
          },
          375: {
            width: 375,
            slidesPerView: 1,
          },
          425: {
            width: 425,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
          860: {
            width: 860,
            slidesPerView: 4,
          },
          1024: {
            width: 1024,
            slidesPerView: 5,
          },
          1440: {
            width: 1440,
            slidesPerView: 5,
          },
        }}
      >
        {sliderData.map((data) => (
        <SwiperSlide className='w-10'>
          <ProductCard  data={{imgSrc: data.image, price: data.price, title: data.title, id: data.id}}  />
        </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}
