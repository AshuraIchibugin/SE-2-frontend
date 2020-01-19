import React from 'react';
import Zoro from '../../assets/icons/zoro.png';
import './categories.scss';

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories-items">
          <img className="categories-items__block" src={Zoro} alt="Zoro" />
          <img className="categories-items__block" src={Zoro} alt="Zoro" />
          <img className="categories-items__block" src={Zoro} alt="Zoro" />
        </div>
      </div>
    </section>
  );
}

export default Categories;

