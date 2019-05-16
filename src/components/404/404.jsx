import React from 'react';

import './404.scss';

const NotFound = () => {
  return (
    <main className="page-content">
      <section className="not-found">
        <div className="not-found__wrapper">
          <h1 className="not-found__title">Sorry but this page does not exist :(</h1>
        </div>
      </section>
    </main>
  )
}

export default NotFound;
