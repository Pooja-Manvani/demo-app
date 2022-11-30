import React from 'react'
import { CardImg } from 'react-bootstrap'


export default function ProductCard(props) {
  let {imgSrc} = props.data;

  return (
    <div className="overflow-hidden">  
      <div className='overflow-hidden bg-grey opacity-card' >
        <CardImg id='productCard' variant='top' src={imgSrc}/>
        {/* <span className='icon-cart hide' /> */}
        <div className='card-overlay'>
          <span className='icon icon-cart'></span>
          <span className='icon icon-heart ms-3'></span>
        </div>
      </div>
      {/* <div className='d-flex '>
        <title className='justify-content-center align-items-center' >{title}</title>
        <title>{price}</title>
      </div> */}
      <div className='text-center p-1 opacity-card-title' >
        <div>Add to cart</div>
      </div>
    </div>
  )
}

