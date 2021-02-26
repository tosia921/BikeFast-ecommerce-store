import React from 'react';
import './styles/global-styles.scss';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <Router>
      <div className='App-container'>
        <Header/>
          <Switch>
            <main>  
            <Route path="/" exact>
              tomek
            </Route>
            <Route path="/about">
              about
            </Route>
            <Route path="/shop">
              SHOP
            </Route>
            <Route path="/contact">
              contact
            </Route>
            <Route path="/signin">
              contact
            </Route>
            <Route path="/cart">
              contact
            </Route>
            </main>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
