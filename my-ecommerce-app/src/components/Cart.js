// Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <p>Total: {cartItems.reduce((total, item) => total + item.total, 0)}</p>
    </div>
  );
};

export default Cart;
