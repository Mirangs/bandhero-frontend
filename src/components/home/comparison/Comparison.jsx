import React from 'react';

import './Comparison.scss';
import yesIcon from './img/yes-icon.png';
import noIcon from './img/no-icon.png';

const Comparison = () => {
  return (
    <section className="comparison">
      <div className="comparison__wrapper">
        <table className="comparison__table">

          <thead>
            <tr>
              <th className="excess"></th>
              <th>Free</th>
              <th>Premium</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td className="comparison__label">Members in session</td>
              <td>Up to 5</td>
              <td>Up to 20</td>
            </tr>
            <tr>
              <td className="comparison__label">Effects</td>
              <td>20+ trial effects</td>
              <td>1000+ premium effects</td>
            </tr>
            <tr>
              <td className="comparison__label">Advertising</td>
              <td className="comparison__yes-cell"><img src={yesIcon} width="40" height="30" alt="yes"/></td>
              <td className="comparison__no-cell"><img src={noIcon} width="32" height="32" alt="no"/></td>
            </tr>
            <tr>
              <td className="comparison__label">Special icon in chat</td>
              <td className="comparison__no-cell"><img src={noIcon} width="32" height="32" alt="no"/></td>
              <td className="comparison__yes-cell"><img src={yesIcon} width="40" height="30" alt="yes"/></td>
            </tr>
            <tr>
              <td className="comparison__label">Progressive mixing</td>
              <td className="comparison__no-cell"><img src={noIcon} width="32" height="32" alt="no"/></td>
              <td className="comparison__yes-cell"><img src={yesIcon} width="40" height="30" alt="yes"/></td>
            </tr>
          </tbody>

        </table>
      </div>
    </section>
  )
}

export default Comparison;
