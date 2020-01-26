import React from 'react';
import Header from '../components/Header';
import DetailProduct from '../components/DetailProduct';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';
import DetailDescription from '../components/DetailDescription';
import RecentProducts from '../components/RecentProducts';

const ProductPage = () => {
  return (
    <div>
      <Header />
      <DetailProduct />
      <DetailDescription />
      <RecentProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
