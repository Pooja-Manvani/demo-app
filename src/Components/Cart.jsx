import React from 'react'
import ReactModal from 'react-modal'
import CartItem from './CartItem'

export default function Cart(props) {
  return (
    <ReactModal
    className="overlay-modal"
    isOpen={true}
    // onRequestClose={false}
    // shouldCloseOnOverlayClick={false}
    >
    <div
    className='cart-Container '
    >
      <CartItem/>
    </div>
    </ReactModal>
  )
}
