import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <NavLink className="main-nav__link" activeClassName='main-nav__link--active' to='/' exact>Home</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink className="main-nav__link" activeClassName='main-nav__link--active' to='/about'>About us</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink className="main-nav__link" activeClassName='main-nav__link--active' to='/news'>News</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink className="main-nav__link" activeClassName='main-nav__link--active' to='/subscription'>Subscription</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink className="main-nav__link" activeClassName='main-nav__link--active' to='/contacts'>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
