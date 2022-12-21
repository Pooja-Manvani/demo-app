import React, { useContext } from 'react'
import { CardImg } from 'react-bootstrap'
import CartContext from "../context/CartContext";

export default function ProductCard(props) {
  let {imgSrc, title, id, price} = props.data;
  let product = props.data;
  const {addProductToCart} = useContext(CartContext);
const addProduct =()=>{
  addProductToCart(product)
}
  return (
    <div className="overflow-hidden">
    {/* {context => (
            cartItemNumber = context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)
            )} */}
    <div className='overflow-hidden bg-grey opacity-card'>
        <CardImg  variant='top' src={require(`../assets/images/${imgSrc}`)}/>

        <div className='card-overlay' >
          <span className='icon icon-cart' id={id} onClick={addProduct} ></span>
          <span className='icon icon-eye ms-3'></span>
          <span className='icon icon-heart ms-3'></span>
        </div>
    </div>

        <div
        onClick={addProduct}
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

