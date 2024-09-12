// Shop.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css'; // Ensure this file contains your custom CSS for Shop component

const Shop = () => {
  return (
    <div>
      <nav className="shop-navbar">
        <div className="shop-container">
          <ul className="shop-nav">
            <li className="shop-nav-item">
              <Link to="/shop/steel" className="shop-nav-link">Steel</Link>
            </li>
            <li className="shop-nav-item">
              <Link to="/shop/wood" className="shop-nav-link">Wood</Link>
            </li>
            <li className="shop-nav-item">
              <Link to="/shop/glass" className="shop-nav-link">Glass</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="shop-content">
        {/* Content related to the selected category will be shown here */}
      </div>
    </div>
  );
};

export default Shop;
