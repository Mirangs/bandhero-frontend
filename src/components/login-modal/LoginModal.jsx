import React, { useState, createRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './LoginModal.scss';

const loginContainer = document.querySelector('#loginModal');
const loginField = createRef();
const passwordField = createRef();

const LoginModal = ({ onModalClose, setUser, setIsLogged }) => {
  const [status, setStatus] = useState(undefined);

  const loginUser = async evt => {
    evt.preventDefault();

    const settings = {
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'method': 'POST',
      'credentials': 'include',
      'body': JSON.stringify({
        name: loginField.current.value,
        password: passwordField.current.value
      })
    }
    const api_call = await fetch('/api/user', settings);
    const request = await api_call.json();
    if (request.status) {
      setStatus(request.status);
    } else {
      setIsLogged(true);
      setUser(request[0]);
      onModalClose();
    }
    
    
  }

  return (
    <div className="overlay">
      <section className="login-modal">
        <form>
          <h3 className="login-modal__title">Log in</h3>

          <label className="login-modal__field">
            Login
            <input type="text" id="login-field" ref={loginField}/>
          </label>
          <label className="login-modal__field">
            Password
            <input type="password" id="password-field" ref={passwordField}/>
          </label>

          <div className="layout">
            <label className="login-modal__remember">
              <input type="checkbox"/>
              Remember me
            </label>

            <Link to="/forget-password" className="login-modal__forget-link">Forget password</Link>
          </div>

          {
            status && <p className="status-error" style={{color: 'red'}}>{status}</p>
          }

          <button type="submit" className="login-modal__login" onClick={loginUser}>Log in</button>
          <Link to="/register" className="login-modal__register" onClick={onModalClose}>Register</Link>
        </form>
      </section>
      <button className="login-modal__close" onClick={onModalClose}>Close modal</button>
    </div>
  );
}

const LoginModalPortal = ({ onModalClose, setUser, setIsLogged }) => {
  return (
    ReactDOM.createPortal(<LoginModal onModalClose={onModalClose} setUser={setUser} setIsLogged={setIsLogged}/>, loginContainer)
  )
}

export default LoginModalPortal;
