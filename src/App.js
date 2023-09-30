import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Cart from './components/Cart';
import ErorrPage from './components/ErorrPage';
import Landing from './components/Landing';
import List from './components/List';
import React from 'react';
import StoreNavbar from './components/StoreNavbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StoreNavbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/shop' element={<List />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<ErorrPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
