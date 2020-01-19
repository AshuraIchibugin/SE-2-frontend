import React from 'react';
import Zoro from '../../assets/icons/zoro.png';
import './blog.scss';

function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog-wrapper">
          <div className="blog-title">
            Stories
          </div>
          <div className="blog-stories-wrapper">
            <div className="blog-stories">
              <img className="blog-stories__image" src={Zoro} alt="Zoro" />

              <span className="blog-stories__title">
                Priyanka Chopra Steps out in One of
  Winter’s Most Affordable Jeans
              </span>
            </div>
            <div className="blog-stories">
              <img className="blog-stories__image" src={Zoro} alt="Zoro" />

              <span className="blog-stories__title">
                6 Ways To Make More Time in Mother
  hood & Your Career
              </span>
            </div>
            <div className="blog-stories">
              <img className="blog-stories__image" src={Zoro} alt="Zoro" />

              <span className="blog-stories__title">
                Nightly Skincare Routine – It’s More
  Than Washing Your Face
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

