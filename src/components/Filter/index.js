import React from 'react';
import './filter.scss';

const Filter = () => {
  return (
    <section className="filter">
      <div className="main-container">
        <div className="filter-wrapper">
          <ul className="filter-categories">
            <li className="filter-categories__item">
              All
              </li>
            <li className="filter-categories__item">
              Women
              </li>
            <li className="filter-categories__item">
              Man
              </li>
            <li className="filter-categories__item">
              Accessories
              </li>
            <li className="filter-categories__item">
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

