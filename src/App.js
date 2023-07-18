import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bookshelf from './components/bookShelf';
import Nav from './components/nav';
import Categories from './components/categories';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Bookshelf />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
