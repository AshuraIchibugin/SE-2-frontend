import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Filter from '../components/Filter';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';
import ProductList from '../components/ProductList';

function ShopPage() {
  return (
    <div>
      <Header />
      <Slider />
      <Filter />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ShopPage;
