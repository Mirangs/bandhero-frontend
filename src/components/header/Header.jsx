import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../nav/Nav';

import './Header.scss';
import pageLogo from './img/page-logo.png';

const Header = ({ onModalOpen }) => {
  const onBurgerClick = () => {
    const menu = document.querySelector('.page-menu');
    menu.classList.toggle('page-menu--open');
  }

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-logo">
          <Link to='/'>
            <img src={pageLogo} alt="page logo" />
          </Link>
        </div>

        <button className="burger" onClick={onBurgerClick}>Open menu</button>
        <Nav onModalOpen={onModalOpen}/>
      </div>
    </header>
  )
}

export default Header;
