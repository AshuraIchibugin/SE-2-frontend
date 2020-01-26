import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import BlogList from '../components/BlogList';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <BlogList />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
