import React from 'react';
import './item.scss';

function Item() {
  return (
    <div className="item">
      <div className="item-cards-container">
        <div className="item-cards-wrapper">
          <div className="item-cards">
            <div className="item-cards__image" />
            <span className="item-cards__name">Trekking Sneakers</span>
            <p className="item-cards__price">$150</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

