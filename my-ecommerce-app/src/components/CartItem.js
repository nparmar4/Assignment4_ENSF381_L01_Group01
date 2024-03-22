// CartItem.js
import React from 'react';

const CartItem = ({ item, onRemove }) => {
  const { image, name, price, quantity, total } = item;

  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: {total}</p>
      <button onClick={() => onRemove(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
