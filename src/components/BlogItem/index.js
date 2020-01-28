import React from 'react';
import './blogItem.scss';

const keks = [
  {
    tag: 'inpiration',
    title: 'Priyanka Chopra Steps out One of Winter’s Most',
    id: 1
  },
  {
    tag: 'Design',
    title: 'Ways To Make More Time Mother hood & Your Career',
    id: 2
  },
  {
    tag: 'New Trends',
    title: 'What Living in New York Teaches You About Love',
    id: 3
  },
  {
    tag: 'New Trends',
    title: 'Nightly Skincare Routine It’s More Than Washing',
    id: 4
  },
  {
    tag: 'Design',
    title: 'How Hailey Baldwin Gets Her Back From Beach Glow',
    id: 5
  },
  {
    tag: 'Design',
    title: 'Botanical Valentine’s Day Gifts That Aren’t Bouquets',
    id: 6
  },
  {
    tag: 'inpiration',
    title: 'Cardi Most Outrageous Quotes on New Motherhood',
    id: 7
  },
  {
    tag: 'New Trends',
    title: 'Stunning Antique Jewels Are Sold and Shared World',
    id: 8
  },
  {
    tag: 'Design',
    title: 'Woody Allen Is Suing Amazon for Not Releasing His Movies',
    id: 9
  },
]

const BlogItem = () => {
  return (
    <div className="blog-list-cards">

      {
        keks.map(lol => (
          <div className="blog-item">

            <div className="blog-item-wrapper" key={lol.id}>
              <div className="blog-cards">
                <div className="blog-cards__image" />
                <span className="blog-cards__tag">{lol.tag}</span>
                <span className="blog-cards__title">{lol.title}</span>
              </div>
            </div>
          </div>

        ))
      }

    </div>


  );
}

export default BlogItem;
