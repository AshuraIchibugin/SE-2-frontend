import React from 'react';
import './newsletter.scss';

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-wrapper ">
          <div className="newsletter-title">
            novur
        </div>
          <div className="newsletter-email-wrapper">
            <input type="comment" placeholder="Your Email Adress" className="newsletter-email" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
