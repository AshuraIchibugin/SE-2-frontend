import React from 'react';
import './sendUs.scss';

const SendUs = () => {
  return (
    <section className="send-us">
      <div className="main-container">
        <div className="send-form">
          <h1 className="send-form__title">send us a message</h1>
          <form className="send-form__content">
            <input className="send-form__input" type="text" />
            <input className="send-form__input" type="text" />
            <input className="send-form__input" type="text" />
            <button className="send-button">send message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2 className="contact-info__title">get in touch with us</h2>
          <p className="contact-info__text">Lorem ipsum dolor sit amet, conse ctetur adipiscing ferme vestibulum mauris. Aenean vel mi in ipsum iaculis blandit. </p>
          <div className="contact-info__content">
            <span className="contact-info__content__title">
              our office
            </span>
            <span className="contact-info__content__location">
              location icon/ 1 S Commercial Ave, St Lawrence, SD 57373
            </span>
            <span className="contact-info__content__phone">
              telephon icon/ +1 605-853-2728;     +1 605-853-2729
            </span>
            <span className="contact-info__content__email">
              email icon/ shopnovur@info.com;     supportnovur@com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SendUs;