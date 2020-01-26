import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Blog from '../components/Blog';

import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Categories />
      <Products /> 
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
