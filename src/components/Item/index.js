import React from 'react';
import './item.scss';

const item = [
  {
    name: 'Trekking Sneakers',
    price: '$150',
    id: 1
  },
  {
    name: 'chantegrelle glasses',
    price: '$74',
    id: 2
  },
  {
    name: 'color sneakers unisex',
    price: '$120',
    id: 3
  },
  {
    name: 'camouflage jacket',
    price: '$200',
    id: 4
  },
  {
    name: 'black leather bag',
    price: '$96',
    id: 5
  },
  {
    name: 'skinny jeans blue',
    price: '$69',
    id: 6
  },
  {
    name: 'reversible windbreaker',
    price: '$150',
    id: 7
  },
  {
    name: 'black high sneakers',
    price: '$149',
    id: 8
  },
  {
    name: 'thick-soled sneakers',
    price: '$205',
    id: 9
  },
  {
    name: 'embroidered hat',
    price: '$150',
    id: 10
  },
  {
    name: 'basic denim jacket',
    price: '$150',
    id: 11
  },
  {
    name: "women's sweatshirt",
    price: '$55',
    id: 12
  }
]

const Item = () => {
  return (
    <div className="item">
      {
        item.map(items => (
          <div className="item-cards-wrapper" key={items.id}>
            <div className="item-cards-container">
              <div className="item-cards">
                <div className="item-cards__image" />
                <span className="item-cards__name">{items.name}</span>
                <p className="item-cards__price">{items.price}</p>
              </div>
            </div>

          </div>
        ))
      }
    </div>

  );
}

export default Item;

