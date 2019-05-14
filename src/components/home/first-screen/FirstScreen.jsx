import React from 'react';
import { Link } from 'react-router-dom';

import './FirstScreen.scss';

const FirstScreen = ({ onModalOpen }) => {
  return (
    <>
      <section className="first-screen">
          <div className="first-screen__wrapper">
            <h1 className="first-screen__title">Explore music with musicians <span>from anywhere in the world</span></h1>
            <Link className="first-screen__link" to='/getstarted' onClick={onModalOpen}>
              Get started
            </Link>
          </div>
        </section>
    </>
  )
}

export default FirstScreen;
