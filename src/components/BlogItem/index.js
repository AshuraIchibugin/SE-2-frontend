import React from 'react';
import './blogItem.scss';

const BlogItem = () => {
  return (
    <div className="blog-item">
      <div className="blog-item-wrapper">
        <div className="blog-cards">
          <div className="blog-cards__image" />
          <span className="blog-cards__tag">inspiration</span>
          <span className="blog-cards__title">Priyanka Chopra Steps out One of Winter’s Most </span>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
