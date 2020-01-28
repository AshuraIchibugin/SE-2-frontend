import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-navigation-wrapper">
            <Link to="/">
              <span className="header-navigation__icon">
                novur
                  </span>
            </Link>
            <ul className="header-navigation">
              <li className="header-navigation__item">
                <Link to="/">
                  <span className="header-navigation__link">
                    home

                </span>

                </Link>

              </li>
              <li className="header-navigation__item">
                <a href="/#" className="header-navigation__link">
                  categories
              </a>
              </li>
              <li className="header-navigation__item">
                <Link to="/shop">
                  <span className="header-navigation__link">
                    shop
                  </span>
                </Link>
              </li>
              <li className="header-navigation__item">
                <Link to="/blog">
                  <span className="header-navigation__link">
                    blog
                  </span>
                </Link>
              </li>
              <li className="header-navigation__item">
                <Link to="/contact">
                  <span className="header-navigation__link">
                    contact
                  </span>
                </Link>
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
