import React from 'react';

import FirstScreen from './first-screen/FirstScreen';
import Advantages from './advantages/Advantages';
import Comparison from './comparison/Comparison';
import Statistics from './statistics/Statistics';
import Reviews from './reviews/Reviews';
import Partners from './partners/Partners';
import CTA from './cta/CTA';

import './Home.scss';

const Home = ({ onModalOpen }) => {
  return (
    <main className="page-content">
      <FirstScreen onModalOpen={onModalOpen}/>

      <div className="guitar-decoration">
        <Advantages />
        <Comparison />
      </div>

      <Statistics />

      <Reviews />

      <Partners />

      <CTA onModalOpen={onModalOpen}/>
    </main>
  );
}

export default Home;
