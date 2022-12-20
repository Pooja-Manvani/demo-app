import React from 'react'
import { CardImg } from 'react-bootstrap'

export default function ProductCard(props) {
  let {imgSrc, title, id, price} = props.data;
  return (
    <div className="overflow-hidden"  >  
    <div className='overflow-hidden bg-grey opacity-card'>
        <CardImg  variant='top' src={require(`../assets/images/${imgSrc}`)}/>

        <div className='card-overlay' >
          <span className='icon icon-cart' id={id}  ></span>
          <span className='icon icon-eye ms-3'></span>
          <span className='icon icon-heart ms-3'></span>
        </div>
    </div>

    <div 
        className='font-yantramanav product-card-font d-flex p-2 px-4 border border-1 align-items-center justify-content-between'
        >
          <div>{title}</div>
          <div>{`₹${price}`}</div>
          <div> 
            <span className='icon-cart'  ></span>
          </div>
        </div>
    </div>
  )
}

