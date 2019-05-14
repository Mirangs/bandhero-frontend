import React from 'react';

import toontrackLogo from './img/toontrack-logo.png';
import fabfilterLogo from './img/fabfilter-logo.png';
import steinbergLogo from './img/steinberg-logo.png';
import positiveGridLogo from './img/positive-grid-logo.png';
import izotopeLogo from './img/izotope-logo.png';
import spectrasonicsLogo from './img/spectrasonics-logo.png';
import wavesLogo from './img/waves-logo.png';
import preSonusLogo from './img/presonus-logo.png';

import './Partners.scss';

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__wrapper">
        <ul className="partners__list">
          <li className="partners__item"><img width="266" height="46" src={toontrackLogo} alt="toontrack logo"/></li>
          <li className="partners__item"><img width="264" height="53" src={fabfilterLogo} alt="fabfilter logo"/></li>
          <li className="partners__item"><img width="262" height="63" src={steinbergLogo} alt="steinberg logo"/></li>
          <li className="partners__item"><img width="259" height="35" src={positiveGridLogo} alt="positive grid logo"/></li>
          <li className="partners__item"><img width="269" height="101" src={izotopeLogo} alt="izotope logo"/></li>
          <li className="partners__item"><img width="185" height="82" src={spectrasonicsLogo} alt="spectrasonics logo"/></li>
          <li className="partners__item"><img width="87" height="89" src={wavesLogo} alt="waves logo"/></li>
          <li className="partners__item"><img width="258" height="47" src={preSonusLogo} alt="preSonus logo"/></li>
        </ul>
      </div>
    </section>
  )
}

export default Partners;
