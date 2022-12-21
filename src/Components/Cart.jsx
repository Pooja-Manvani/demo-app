import ReactModal from 'react-modal'
import React, { useContext, useEffect } from "react";
import CartContext from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
// import { removeProductFromCart } from '../store/actions';


const CartPage = props => {
  const context = useContext(CartContext);
  useEffect(() => {
    console.log(context);
  }, [context]);
  const navigate = useNavigate();
  const CloseModal = () => {
    navigate('home');
  }
  return (
    <ReactModal
    className="overlay-modal"
    isOpen={true}
    shouldCloseOnOverlayClick={false}
    >
    <div
    className='cart-Container cart '
    >
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul >
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div className='pe-2'>
                <strong  >{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div  className='pe-2'>
                <button
                className='btn btn-outline-secondary'
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <button className='btn btn-outline-secondary' onClick={CloseModal}>
            Close
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

export default CartPage;
