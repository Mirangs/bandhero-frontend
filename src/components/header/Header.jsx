import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../nav/Nav';

import './Header.scss';
import pageLogo from './img/page-logo.png';

const Header = ({ onModalOpen }) => {
  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-logo">
          <Link to='/'>
            <img src={pageLogo} alt="page logo" />
          </Link>
        </div>

        <Nav />

        <section className="user-block">
          <Link className="user-block__link" to="/login" onClick={onModalOpen}>Log in</Link>
        </section>
      </div>
    </header>
  )
}

export default Header;
