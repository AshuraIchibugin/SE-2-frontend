import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import BlogListPage from './pages/BlogListPage';
import ContactPage from './pages/ContactPage';
import ShoppingCart from './pages/ShoppingCart';





const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/item" component={ProductPage} />
      <Route path="/blog" component={BlogListPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/shopping" component={ShoppingCart} />
    </BrowserRouter>
  );
}




export default AppRouter;
