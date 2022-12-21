import React from 'react'


export default function CartItem(props) {
 let {title, img, price, id} = props.item;
  return (
    <div className='d-flex border border-1 p-2 ' >
      <div className='text-Red' >
       title: {title},image: {img},Price: {price},id: {id}
      </div>
    </div>
  )
}

  