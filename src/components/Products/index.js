import React from 'react';
import Item from '../Item';
import './products.scss';

function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="product-wrapper">
          <ul className="product-categories">
            <li className="product-categories__item">
              <a className="product-categories__link" href="/#">
                All
            </a>
            </li>
            <li className="product-categories__item">
              <a className="product-categories__link" href="/#">
                Women
            </a>
            </li>
            <li className="product-categories__item">
              <a className="product-categories__link" href="/#">
                Man
            </a>
            </li>
            <li className="product-categories__item">
              <a className="product-categories__link" href="/#">
                Accessories
            </a>
            </li>
            <li className="product-categories__item">
              <a className="product-categories__link" href="/#">
                Shoes
            </a>
            </li>
          </ul>
          <div className="product-cards-container">
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

        </div>
      </div>
    </section>
  );
}

export default Products;

