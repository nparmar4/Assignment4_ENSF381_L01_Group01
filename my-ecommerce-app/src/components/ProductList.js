// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import products from '../data/products'; 

const ProductList = ({ onAddToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
