import React from 'react';

import max from './img/max.jpg';
import lyoha from './img/lyoha.jpg';
import pots from './img/pots.jpg';
import bodya from './img/bodya.jpg';

import './About.scss';

const About = () => {
  return (
    <main className="page-content">
      <section className="about">
        <div className="about__wrapper">
          <h2 className="about__title">About us</h2>
          <p className="about__description">We are small startup company called SoundKing, which is aimed for creating useful program products for musicians. You might know us by our most popular product - Band Hero, product from musicians for musicians and which helps them to rehearse with band, learn instruments and even give concerts online. This is how we see future of music industry. We plan to evolve music industry and develop new cool products, so keep up-to-date on us!</p>
          <section className="team">
            <h3 className="team__title">Our team</h3>
            <ul className="team__list">
              <li className="team__item">
                <img src={max} width="325" height="325" alt="Max Berezanskiy"/>
                <span className="team__name">Max Berezanskiy</span>
                <span className="team__position">Team Lead, CTO</span>
              </li>
              <li className="team__item">
                <img src={lyoha} width="325" height="325" alt="Lyoha Yakimov"/>
                <span className="team__name">Lyoha Yakimov</span>
                <span className="team__position">Senior Software developer</span>
              </li>
              <li className="team__item">
                <img src={pots} width="325" height="325" alt="Ivan Boyko"/>
                <span className="team__name">Ivan Boyko</span>
                <span className="team__position">Linux specialist</span>
              </li>
              <li className="team__item">
                <img src={bodya} width="325" height="325" alt="Bohdan Lukashenko"/>
                <span className="team__name">Bohdan Lukashenko</span>
                <span className="team__position">Marketer</span>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  )
}

export default About;
