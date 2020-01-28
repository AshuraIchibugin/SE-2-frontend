import React from 'react';
import Item from '../Item';
import './productList.scss';

const ProductsList = () => {
  return (
    <section className="product-list">
      <div className="main-container product-list-wrapper">
        <div className="product-list-cards">
          <Item />
        </div>
        <div className="product-loading">
          <button className="product-loading__button">+</button>
          <span className="product-loading__text"> load more</span>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;

