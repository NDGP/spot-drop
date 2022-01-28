import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import geolocation from 'geolocation'
import Navigation from './components/layout/Navigation';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Pages/Home';
import setAuthToken from './utils/setAuthToken';
import Drops from './components/drops/Drops';

if (localStorage.token)  {
  setAuthToken(localStorage.token)
}
if('geolocation' in navigator) {
  console.log('location given')
} else {
  console.log('location denied')
}

const App = () => {
 
  return (
    <Provider store={store}>
        <BrowserRouter>
        <Navigation />
        <Fragment>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='Login'element={<Login />} ></Route>
            <Route path='Register'element={<Register />} ></Route>
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
