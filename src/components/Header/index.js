import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './header.scss';

const Header =() =>{
  return (
    <section className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-navigation-wrapper">
            <div className="header-navigation__icon">
              novur
            </div>
            <ul className="header-navigation">
              <li className="header-navigation__item">
                <a href="/#" className="header-navigation__link">
                  home
              </a>
              </li>
              <li className="header-navigation__item">
                <a href="/#" className="header-navigation__link">
                  featured
              </a>
              </li>
              <li className="header-navigation__item">
                <a href="/#" className="header-navigation__link">
                  shop
              </a>
              </li>
              <li className="header-navigation__item">
                <a href="/#" className="header-navigation__link">
                  blog
              </a>
              </li>
              <li className="header-navigation__item">
                <a href="/#" className="header-navigation__link">
                  contact
              </a>
              </li>
            </ul>
          </div>
          <div className="header-actions">
            <div className="header-action__search">
              <FontAwesomeIcon
                className="header-actions__search-icon"
                icon={faSearch} />
              <span className="header-actions__search-text">Search</span>
            </div>
            <span className="header-actions__line">
              |
            </span>
            <FontAwesomeIcon
              className="header-actions__market"
              icon={faShoppingCart} />
          </div>
        </div>
      </div>

    </section >
  );
}

export default Header;
