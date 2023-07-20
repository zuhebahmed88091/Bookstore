import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import './styles/nav.css';

const Nav = () => (
  <nav className="nav-container">
    <h1 className="nav-heading">Bookstore CMS</h1>
    <ul className="nav-ul">
      <li className="nav-li">
        <NavLink to="/" className="links">
          Books
        </NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/categories" className="links">
          Categories
        </NavLink>
      </li>
    </ul>
    <div className="profile-wrap">
      <CgProfile className="profile-icon" />
    </div>
  </nav>
);

export default Nav;
