import React from 'react';
import './filter.scss';

function Filter() {
  return (
    <section className="filter">
      <div className="shop-container">
        <div className="filter-wrapper">
          <ul className="filter-categories">
            <li classNam="filter-categories__item">
              All
              </li>
            <li classNam="filter-categories__item">
              Women
              </li>
            <li classNam="filter-categories__item">
              Man
              </li>
            <li classNam="filter-categories__item">
              Accessories
              </li>
            <li classNam="filter-categories__item">
              Shoes
              </li>
          </ul>
          <div className="filter-container">
            <span className="filter-container__sort">sort by</span>
            <span className="filter-container__filter">+ filter</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filter;

