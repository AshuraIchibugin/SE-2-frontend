import React from 'react';
import Header from '../components/Header';
import Map from '../components/Map';
import SendUs from '../components/SendUs';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import '../assets/styles/main.scss';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Map />
      <SendUs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ContactPage;
