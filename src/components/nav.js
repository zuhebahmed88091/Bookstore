import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './styles/nav.css';

const Nav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <nav className="nav-container">
      <h1 className="nav-heading">Bookstore CMS</h1>
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink
            to="/"
            className={`links ${activeLink === '/' ? 'active-links' : ''}`}
            onClick={() => handleNavLinkClick('/')}
          >
            BOOKS
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            to="/categories"
            className={`links ${activeLink === '/categories' ? 'active-links' : ''}`}
            onClick={() => handleNavLinkClick('/categories')}
          >
            CATEGORIES
          </NavLink>
        </li>
      </ul>
      <div className="profile-wrap">
        <span className="profile-icon primary-color"><ImUser /></span>
      </div>
    </nav>
  );
};

export default Nav;
