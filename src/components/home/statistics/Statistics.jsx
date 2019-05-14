import React from 'react';

import './Statistics.scss';

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics__wrapper">
        <h2 className="statistics__title">Statistics</h2>
          <ul className="statistics__list">
            <li className="statistics__item">
              <b className="statistics__value">1000+</b>
              <span className="statistics__description">Different sound effects and plugins</span>
            </li>
            <li className="statistics__item">
              <b className="statistics__value">15 000+</b>
              <span className="statistics__description">Positive reviews from satisfied customers</span>
            </li>
            <li className="statistics__item">
              <b className="statistics__value">200 000+</b>
              <span className="statistics__description">Active customers around the world</span>
            </li>
          </ul>
      </div>
    </section>
  )
}

export default Statistics;
