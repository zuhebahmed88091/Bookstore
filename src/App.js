import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Bookshelf from './components/bookShelf';
import Nav from './components/nav';
import Categories from './components/categories';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Bookshelf />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
