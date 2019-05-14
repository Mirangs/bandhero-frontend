import React from 'react';

import './Advantages.scss';

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages__wrapper">
        <h2 className="advantages__title">Advantages</h2>
        <ul className="advantages__list">
          <li className="advantages__item advantages__item--uniq">
            <h3 className="advantages__item-title">Uniqueness</h3>
            <p className="advantages__item-description">No one has done this before us. This is unique, unrepeatble product in musical sphere!</p>
          </li>
          <li className="advantages__item advantages__item--flex">
            <h3 className="advantages__item-title">Flexibility</h3>
            <p className="advantages__item-description">Set your workplace  as you want. Tons of settings, customizations and presets.</p>
          </li>
          <li className="advantages__item advantages__item--group">
            <h3 className="advantages__item-title">Large Group</h3>
            <p className="advantages__item-description">With this product you can add up to 20 members in your music session.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Advantages;
