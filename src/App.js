import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUpPage from './pages/sign-in-up/sign-in-sign-up.component'
import Header from './components/header/header.component';

function App() {
  return (
    <div>
    <Header />
    <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={ShopPage} />
     <Route path='/signin' component={SignInAndUpPage} />
    </Switch>
    </div>
  );
}

export default App;
