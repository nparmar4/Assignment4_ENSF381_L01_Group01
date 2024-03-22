// ProductItem.js
import React, { useState } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3 onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
        {product.name}
      </h3>
      {showDetails && <p>{product.description}</p>}
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
