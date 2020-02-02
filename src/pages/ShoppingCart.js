import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import ShoppingBag from '../components/ShoppingBag'
import '../assets/styles/main.scss';

const ShopPage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ShoppingBag />
      <Footer />
    </div>
  );
}

export default ShopPage;
