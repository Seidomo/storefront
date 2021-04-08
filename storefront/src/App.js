import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Cart from './components/cart/simplecart.js';
import Category from './components/storefront/categories.js';
import Products from './components/storefront/products.js';
import { Provider } from 'react-redux';
import ourStore from './store/index.js';
import './App.css';

function App() {
  return (

    
      
    <Provider store={ourStore()}>
        <Header />
        <Category  />
        <Cart />
        <Products />
       <Footer />
      </Provider>
      
  );
}

export default App;
