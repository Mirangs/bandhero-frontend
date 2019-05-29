import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import './Register.scss';

const Register = () => {
  //TODO: Validation form

  const [redirect, setRedirect] = useState(false);
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [err, setErr] = useState(null);
  const [isPassesIdentical, setIsPassIdentical] = useState(true);

  useEffect(() => {
    comparePasswords();
  });

  const onRegister = async evt => {
      evt.preventDefault();

      const user = {
        login,
        pass,
        email,
        phone
      }

      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      }
    
      const response = await fetch('https://band-hero-backend.herokuapp.com/api/register', config);
      const request = await response.json();
      if (request.status === 200) {
        alert('Successful registration!');
        setRedirect(true);
      } else {
        setErr(request.message);
      }
    }

    const comparePasswords = () => {
      if (pass !== repeatPass) {
        setIsPassIdentical(false);
      } else {
        setIsPassIdentical(true);
      }
    }

    return(
        <main className="page-content">
            <section className="register">
                <div className="register__wrapper">
                    <h2 className="register__title">Registration</h2>
                    <form className="register__form" onSubmit={onRegister}>
                        <label className="register__field">
                            Login
                            <input type="text" name="login" id="login-field" onChange={evt => setLogin(evt.target.value)} required/>
                        </label>
                        <label className="register__field">
                            Email
                            <input type="email" name="email" id="email-field" onChange={evt => setEmail(evt.target.value)} required/>
                        </label>
                        <label className="register__field">
                            Password
                            <input type="password" name="password" id="password-field" onInput={evt => {setPass(evt.target.value)}} required/>
                            {
                              !isPassesIdentical && <p style={{color: 'red'}}>Passwords should be identical</p>
                            }
                        </label>
                        <label className="register__field">
                            Repeat password
                            <input type="password" name="repeat-password" id="repeat-password-field" onInput={evt => { setRepeatPass(evt.target.value)}} required/>
                            {
                              !isPassesIdentical && <p style={{color: 'red'}}>Passwords should be identical</p>
                            }
                        </label>
                        <label className="register__field">
                            Phone
                            <input type="text" name="phone" id="phone-field" required onChange={evt => setPhone(evt.target.value)}/>
                        </label>
                        <div className="register__checks">
                            <label className="register__check">
                                <input type="checkbox" name="agreement" id="agreement-field" required/>
                                I agree with terms and conditions
                            </label>
                            <label className="register__check">
                                <input type="checkbox" name="give-information" id="five-information-field" required/>
                                I agree to give my information
                            </label>
                        </div>
                        {
                          err && <p className="register__error">{err}</p>
                        }
                        <button type="submit" className="register__register-btn" disabled={!isPassesIdentical}>Register</button>
                        {
                          redirect && <Redirect to="/" />
                        }
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Register;