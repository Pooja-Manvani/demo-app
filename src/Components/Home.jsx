import React from 'react'
import Slider from './Slider'
// import ProductHome from './ProductHome'

export default function Home() {
  return (
    <div className='overflow-auto ' >
      <div className='d-flex justify-content-end flex-grow-1 ' >
      <Slider />
      {/* <ProductHome /> */}
      </div>
    </div>
  )
}
