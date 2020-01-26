import React from 'react';
import './detailProduct.scss';

const DetailProduct = () => {
  return (
    <div className="detail-product">
      <div className="main-container">
        <div className="detail-product-wrapper">
          <div className="detail-product-image">

          </div>
          <div className="detail-product-description">
            <span className="detail-product-description__title">
              skinny jeans blue
            </span>
            <span className="detail-product-description__stars">
              stars 3 review
            </span>
            <span className="detail-product-description__price">
              $69
            </span>
            <p className="detail-product-description__description">
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. In ferme ntum    vestibulum mauris. Aenean vel mi in ipsum iaculis blandit. Orci varius nato penatibus et magnis dis parturient montes, nascetur ridiculus.
            </p>
            <div className="detail-product-actions">
              <span className="detail-product-actions__quantity">1</span>
              <button className="detail-product-actions__cart">add to cart</button>
              <span className="detail-product-actions__wishlist">like icon</span>
            </div>
            <span className="detail-product__category">category: sneakers</span>
            <span className="detail-product__tags">tags: shoes, men, clothes</span>
            <div className="detail-product-social">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;

