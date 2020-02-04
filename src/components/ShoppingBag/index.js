import React from "react";
import "./styles.scss";

const ShoppingBag = () => {
  const bags = [
    {
      id: "1",
      index: "1",
      img: "img",
      title: "Color Sneakers Unisex ",
      size: 41,
      color: "orange",
      quantity: 1,
      price: 126
    },
    {
      id: "2",
      index: "2",
      img: "img",
      title: "Polka Belt Dress",
      size: "xs",
      color: "none",
      quantity: 1,
      price: 218
    }
  ];
  return (
    <section className="shopping">
      <div className="container">
        <div className="shopping-wrap">
          <div className="shopping-bag">
            <div className="shopping-bag__title">
              <h3 className="shopping-bag__title-name">shopping bag</h3>
            </div>
            <div className="shopping-bag__sections">
              {bags.map(bag => (
                <div className="shopping-bag__section" key={bag.id}>
                  <div className="shopping-bag__section-info">
                    <span className="shopping-bag__section-info__count">
                      0{bag.index}
                    </span>
                    <div className="shopping-bag__section-info__image">
                      {bag.img}
                    </div>
                  </div>
                  <div className="shopping-bag__section-detail">
                    <div className="shopping-bag__section-detail__title">
                      <p className="shopping-bag__section-detail__title-name">
                        {bag.title}
                      </p>
                    </div>
                    <div className="shopping-bag__section-detail__content">
                      <div className="shopping-bag__section-detail__content-left">
                        <p>
                          <span>size:</span>
                          {bag.size}
                        </p>
                        <p>
                          <span>color:</span>
                          {bag.color}
                        </p>
                        <p>
                          <span>quantity:</span>
                          {bag.quantity}
                        </p>
                      </div>
                      <div className="shopping-bag__section-detail__content-right">
                        <span>${bag.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="shopping-bag__buttons">
              <button className="shopping-bag__button">
                continue shopping
              </button>
              <button className="shopping-bag__button">Update cart</button>
            </div>
          </div>
          <div className="cart-totals">
            <div className="cart-totals__title">
              <h3 className="cart-totals__title-name">cart totals</h3>
            </div>
            <div className="cart-totals__section">
              <div className="cart-totals__section-detail">
                <span className="cart-totals__section-detail__name">
                  subtotal
                </span>
                <span className="cart-totals__section-detail__price">$344</span>
              </div>
              <div className="cart-totals__section-detail">
                <span className="cart-totals__section-detail__name">
                  shipping
                </span>
                <span className="cart-totals__section-detail__price">
                  $0.00
                </span>
              </div>
              <div className="cart-totals__section-detail">
                <span className="cart-totals__section-detail__name">total</span>
                <span className="cart-totals__section-detail__price">$344</span>
              </div>
              <button className="cart-totals__section-button">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingBag;
