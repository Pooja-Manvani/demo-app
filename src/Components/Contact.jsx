import React from 'react'
import { CardImg } from 'react-bootstrap'
import imgSrcA from '../assets/images/img4.jpg'
import imgSrcB from '../assets/images/img5.jpg'
import imgSrcC from '../assets/images/img6.jpg'

export default function Contact() {
  return (
    <div className='container contact-container  my-5'  >
        <div className='contact-img-wrapper' >
            <div className='d-flex justify-content-center'>
                <div className='me-4'>
                    <CardImg src={imgSrcA} className=" overflow-hidden" />
                </div>
                <div className='me-4'>
                    <CardImg src={imgSrcB} className=" overflow-hidden" />
                </div>
            </div>
            <div className='contact-text align-text-center mt-4 container text-wrap '>
                <div className='small-text mb-2'>L I F E S T Y L E</div>
                <div className='fs-5'>
                    <p className='m-0'>WE HAVE A</p>
                    <p className='m-0'> FRAGRANCE FOR ALL</p>
                    <p className='m-0'> OCASSION</p>
                </div>
            </div>
        </div>
        <div className='contact-img-wrapper overflow-hidden flex-grow-1 flex-direction-column' >
            <CardImg src={imgSrcC} className='h-100'/>
        </div>
    </div>
  )
}
