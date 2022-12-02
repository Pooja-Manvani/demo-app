import React from 'react'
import { CardImg, Col, Row } from 'react-bootstrap'
import imgSrcA from '../assets/images/img4.jpg'
import imgSrcB from '../assets/images/img5.jpg'
import imgSrcC from '../assets/images/img6.jpg'

export default function Contact() {
  return (
    <Row className='mx-5 overflow-hidden' >
        <Col className=' py-5' >
            <Row>
                <Col>
                    <CardImg src={imgSrcA} className=" overflow-hidden" />
                </Col>
                <Col>
                    <CardImg src={imgSrcB} className=" overflow-hidden" />
                </Col>
            </Row>
            <div className='contact-text container text-wrap my-5'>
                <div className='small-text mb-3'>L I F E S T Y L E</div>
                <div className='fs-5'>
                    <p className='m-0'>WE HAVE A</p>
                    <p className='m-0'> FRAGRANCE FOR ALL</p>
                    <p className='m-0'> OCASSION</p>
                </div>
            </div>
        </Col>
        <Col className=' py-5' >
            <CardImg src={imgSrcC} className="overflow-hidden" />
        </Col>
    </Row>
  )
}
