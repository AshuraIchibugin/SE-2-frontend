import React from 'react';
import './blog.scss';

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog-wrapper">
          <div className="blog-title">
            Stories
          </div>
          <div className="blog-stories-wrapper">
            <div className="blog-stories">
              <div className="blog-stories__image" />

              <span className="blog-stories__title">
                Priyanka Chopra Steps out in One of
  Winter’s Most Affordable Jeans
              </span>
            </div>
            <div className="blog-stories">
              <div className="blog-stories__image" />

              <span className="blog-stories__title">
                6 Ways To Make More Time in Mother
  hood & Your Career
              </span>
            </div>
            <div className="blog-stories">
              <div className="blog-stories__image" />

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

