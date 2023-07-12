import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <NavLink to="/">
          Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories">
          Categories
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
