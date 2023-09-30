import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoreNavbar from './components/StoreNavbar';
import List from './components/List';
import Cart from './components/Cart';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StoreNavbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/shop' element={<List />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
