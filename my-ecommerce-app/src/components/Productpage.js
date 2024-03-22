// ProductPage.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  useEffect(() => {
    // Save cart items to local storage whenever cartItems change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    // Check if the product already exists in cart
    const existingItem = cartItems.find(item => item.name === product.name);
    if (existingItem) {
      const updatedCartItems = cartItems.map(item =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { ...product, quantity: 1, total: product.price };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.map(item =>
      item.name === itemToRemove.name ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
            <td><ProductList onAddToCart={addToCart} /></td>
            <td style={{verticalAlign: 'top'}}><Cart cartItems={cartItems} /></td>
        </tr>
        </table>
        <Footer />
    </div>
  );
};

export default ProductPage;
