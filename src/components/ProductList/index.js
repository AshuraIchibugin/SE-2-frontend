import React from 'react';
import Item from '../Item';
import './productList.scss';

function ProductsList() {
  return (
    <section className="product-list">
      <div className="shop-container">
        <div className="product-list-wrapper">
          <div className="product-list-cards">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <div className="product-loading">
            <button className="product-loading__button">+</button>
            <span className="product-loading__text"> load more</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;

