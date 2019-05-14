import React from 'react';
import { Link } from 'react-router-dom';

import './CTA.scss';

const CTA = ({ onModalOpen }) => {
  return (
    <section className="cta">
      <div className="cta__wrapper">
        <strong className="cta__slogan">What are you waiting for?<span>Sign up and try yourself!</span></strong>
        <Link to="/signup" className="cta__link" onClick={onModalOpen}>Sign up for free</Link>
      </div>
    </section>
  )
}

export default CTA;
