import React from 'react'
import { Card, CardGroup, CardImg, Col, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import img from '../assets/images/Product1.jpg'

export default function ProductsInfoCard() {
  return (
     <div className='container p-4' >
        <Card className='product-card-img p-4 pb-0' >
            <CardImg src={img}></CardImg>
            <div className='p-2 text-center' >Title</div>
        </Card>

     </div>
  )
}
