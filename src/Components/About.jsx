import React from 'react'
import { CardImg } from 'react-bootstrap'
import SrcImg from '../assets/images/img7.jpg'

export default function About() {
  return (
    <div className='container mt-5 d-flex overflow-hidden'>
        <CardImg src={SrcImg} className='w-50 zoom-effect' />
        <div className='container w-50 overflow-hidden'>
            process
        </div>
    </div>
  )
}
