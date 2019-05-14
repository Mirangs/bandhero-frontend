import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './LoginModal.scss';

const loginContainer = document.querySelector('#login-modal');

const LoginModal = ({ onModalClose }) => {
  return (
    <div className="overlay">
      <section className="login-modal">
        <form>
          <h3 className="login-modal__title">Log in</h3>

          <label className="login-modal__field">
            Login
            <input type="text"/>
          </label>
          <label className="login-modal__field">
            Password
            <input type="password"/>
          </label>

          <div className="layout">
            <label className="login-modal__remember">
              <input type="checkbox"/>
              Remember me
            </label>

            <Link to="/forget-password" className="login-modal__forget-link">Forget password</Link>
          </div>

          <button type="submit" className="login-modal__login">Log in</button>
          <Link to="/register" className="login-modal__register">Register</Link>
        </form>
      </section>
      <button className="login-modal__close" onClick={onModalClose}>Close modal</button>
    </div>
  );
}

const LoginModalPortal = ({ onModalClose }) => {
  return (
    ReactDOM.createPortal(<LoginModal onModalClose={onModalClose}/>, loginContainer)
  )
}

export default LoginModalPortal;
