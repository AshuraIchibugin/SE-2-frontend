import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-reserved">
            ©All rights reserved
        </div>
          <ul className="footer-links">
            <li className="footer-links__item">
              <a href="/#" className="footer-links__link">
                home
            </a>
            </li>
            <li className="footer-links__item">
              <a href="/#" className="footer-links__link">
                featured
            </a>
            </li>
            <li className="footer-links__item">
              <a href="/#" className="footer-links__link">
                shop
            </a>
            </li>
            <li className="footer-links__item">
              <a href="/#" className="footer-links__link">
                blog
            </a>
            </li>
            <li className="footer-links__item">
              <a href="/#" className="footer-links__link">
                contact
            </a>
            </li>
          </ul>
          <div className="footer-icons">
            {/* <FontAwesomeIcon 
            className="footer-icons__instagram"
            icon={faInstagram}
          />
           <FontAwesomeIcon 
            className="footer-icons__instagram"
            icon={faFacebook}
          />
           <FontAwesomeIcon 
            className="footer-icons__instagram"
            icon={faTwitter}
          /> */}
            <span className="footer-icons">
              Twitter
          </span>
            <span className="footer-icons">
              Facebook
          </span>
            <span className="footer-icons">
              Instagram
          </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
