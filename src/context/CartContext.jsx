import React from 'react';

const CartContext = React.createContext({
  cart: [],
  addProductToCart: data => {},
  removeProductFromCart: id => {}
});
export default CartContext;