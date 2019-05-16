import React from 'react';

import './Register.scss';

const Register = () => {
    return(
        <main className="page-content">
            <section className="register">
                <div className="register__wrapper">
                    <h2 className="register__title">Registration</h2>
                    <form className="register__form">
                        <label className="register__field">
                            Login
                            <input type="text" name="login" id="login-field" />
                        </label>
                        <label className="register__field">
                            Email
                            <input type="email" name="email" id="email-field" />
                        </label>
                        <label className="register__field">
                            Password
                            <input type="password" name="password" id="password-field" />
                        </label>
                        <label className="register__field">
                            Repeat password
                            <input type="password" name="repeat-password" id="repeat-password-field" />
                        </label>
                        <label className="register__field">
                            Phone
                            <input type="text" name="phone" id="phone-field" />
                        </label>
                        <div className="register__checks">
                            <label className="register__check">
                                <input type="checkbox" name="agreement" id="agreement-field"/>
                                I agree with terms and conditions
                            </label>
                            <label className="register__check">
                                <input type="checkbox" name="give-information" id="five-information-field"/>
                                I agree to give my information
                            </label>
                        </div>
                        <button type="submit" className="register__register-btn">Register</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Register;