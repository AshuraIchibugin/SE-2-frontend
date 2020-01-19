import React from 'react';
import Zoro from '../../assets/icons/zoro.png';
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
            <div className="product-cards-wrapper">
              <div className="product-cards">
                <img className="product-cards__image" src={Zoro} alt="Zoro"/>
                <span className="product-cards__name">Name</span>
                <p className="product-cards__price">$10</p>
              </div>
            </div>
            <div className="product-cards-wrapper">
              <div className="product-cards">
                <img className="product-cards__image" src={Zoro} alt="Zoro"/>
                <span className="product-cards__name">Name</span>
                <p className="product-cards__price">$10</p>
              </div>
            </div>
            <div className="product-cards-wrapper">
              <div className="product-cards">
                <img className="product-cards__image" src={Zoro} alt="Zoro"/>
                <span className="product-cards__name">Name</span>
                <p className="product-cards__price">$10</p>
              </div>
            </div>
            <div className="product-cards-wrapper">
              <div className="product-cards">
                <img className="product-cards__image" src={Zoro} alt="Zoro"/>
                <span className="product-cards__name">Name</span>
                <p className="product-cards__price">$10</p>
              </div>
            </div>
            <div className="product-cards-wrapper">
              <div className="product-cards">
                <img className="product-cards__image" src={Zoro} alt="Zoro"/>
                <span className="product-cards__name">Name</span>
                <p className="product-cards__price">$10</p>
              </div>
            </div>
            <div className="product-cards-wrapper">
              <div className="product-cards">
                <img className="product-cards__image" src={Zoro} alt="Zoro"/>
                <span className="product-cards__name">Name</span>
                <p className="product-cards__price">$10</p>
              </div>
            </div>
            <div className="product-cards-wrapper">
              <div className="product-cards">
                <img className="product-cards__image" src={Zoro} alt="Zoro"/>
                <span className="product-cards__name">Name</span>
                <p className="product-cards__price">$10</p>
              </div>
            </div>
            <div className="product-cards-wrapper">
              <div className="product-cards">
                <img className="product-cards__image" src={Zoro} alt="Zoro"/>
                <span className="product-cards__name">Name</span>
                <p className="product-cards__price">$10</p>
              </div>
            </div>
            <div className="product-cards-wrapper">
              <div className="product-cards">
                <img className="product-cards__image" src={Zoro} alt="Zoro"/>
                <span className="product-cards__name">Name</span>
                <p className="product-cards__price">$10</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Products;

