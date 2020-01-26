import React from 'react';
import Item from '../Item';
import './recentProducts.scss';

const RecentProducts = () => {
  return (
    <div className="recent-products">
      <div className="main-container recent-products-wrapper">
        <span className="recent-products-title">recent products</span>
        <div className="product-list-cards">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}

export default RecentProducts;