import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './Cabinet.scss';

const Cabinet = ({ onLogout, isLogged }) => {
  const [redirect, setRedirect] = useState(false);

  return (
    <main className="page-content">
      <section className="user-cabinet">
        <div className="user-cabinet__wrapper">
        {
          redirect && <Redirect to="/" />
        }
        {
          isLogged ?
            <button className="user-cabinet__logout" onClick={async () => {
              await setRedirect(true);
              await onLogout();
            }}
            >
              Logout
            </button>      
        : <h1 style={{textAlign: 'center'}}>You must login to go to this page</h1>
        }
        </div>
      </section>
    </main>
  )
}

export default Cabinet;
