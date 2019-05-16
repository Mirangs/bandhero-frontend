import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { scrollOnTop } from '../../utils';

import pageLogo from '../header/img/page-logo.png';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper">
        <div className="column">
          <div className="page-logo">
            <NavLink to='/'>
              <img src={pageLogo} alt="page logo" />
            </NavLink>
          </div>

          <p className="page-footer__copyright">
            ©2019 Band Hero, LLC. 
            <span className="page-footer__fake">All information is fake</span>
          </p>
        </div>

        <div className="column">
          <nav className="footer-nav" onClick={scrollOnTop}>
            <ul className="footer-nav__list">
              <li className="footer-nav__item">
                <NavLink className="footer-nav__link" to="/">Home</NavLink>
              </li>
              <li className="footer-nav__item">
                <NavLink className="footer-nav__link" to="/about">About us</NavLink>
              </li>
              <li className="footer-nav__item">
                <NavLink className="footer-nav__link" to="/news">News</NavLink>
              </li>
              <li className="footer-nav__item">
                <NavLink className="footer-nav__link" to="/subscription">Subscription</NavLink>
              </li>
              <li className="footer-nav__item">
                <NavLink className="footer-nav__link" to="/contacts">Contacts</NavLink>
              </li>
            </ul>
          </nav>

          <section className="footer-support">
            <h4 className="footer-support__title">Support</h4>
            <ul className="footer-support__list">
              <li className="footer-support__item">
                <Link to="/faq" className="footer-support__link">Ask us & FAQ</Link>
              </li>
              <li className="footer-support__item">
                <Link to="/support" className="footer-support__link">Contact us</Link>
              </li>
              <li className="footer-support__item">
                <Link to="/report" className="footer-support__link">Report issue</Link>
              </li>
            </ul>
          </section>

          <section className="footer-legal">
            <h4 className="footer-legal__title">Legal</h4>
            <ul className="footer-legal__list">
              <li className="footer-legal__item"><a href="#" className="footer-legal__link">Terms of use</a></li>
              <li className="footer-legal__item"><a href="#" className="footer-legal__link">Privacy policy</a></li>
              <li className="footer-legal__item"><a href="#" className="footer-legal__link">Cookies policy</a></li>
            </ul>
          </section>
        </div>

        <div className="column">
          <div className="footer-social">
            <span>Our social links:</span>
            <ul className="footer-social__list">
              <li className="footer-social__item"><a className="footer-social__link footer-social__link--vk" href="#">VK</a></li>
              <li className="footer-social__item"><a className="footer-social__link footer-social__link--fb" href="#">Facebook</a></li>
              <li className="footer-social__item"><a className="footer-social__link footer-social__link--in" href="#">Instagram</a></li>
              <li className="footer-social__item"><a className="footer-social__link footer-social__link--tw" href="#">Twitter</a></li>
              <li className="footer-social__item"><a className="footer-social__link footer-social__link--yt" href="#">YouTube</a></li>
            </ul>
          </div>

          <p className="footer-developer">
            Created by <a href="#">Mirangs</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
