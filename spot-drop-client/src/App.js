import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import store from './store';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Pages/Home';

const App = () => {
 
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
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
