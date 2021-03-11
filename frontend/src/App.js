import React from 'react';
import './styles/global-styles.scss';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductDetails from './components/product-details/ProductDetails'

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className='App-container'>
        <Header/>
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path="/about">
              about
            </Route>
            <Route path="/shop">
              SHOP
            </Route>
            <Route path="/product/:id" component={ProductDetails}/>
            <Route path="/contact">
              contact
            </Route>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signin"></Route>
            <Route path="/cart/:id?" component={CartPage}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
