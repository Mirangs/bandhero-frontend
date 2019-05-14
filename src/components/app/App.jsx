import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import About from '../about/About';
import News from '../news/News';
import Subscription from '../subscription/Subscription';
import Contacts from '../contacts/Contacts';
import NotFound from '../404/404';
import LoginModal from '../login-modal/LoginModal';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onModalClose = () => {
    setIsPopupOpen(false);
  }

  const onModalOpen = evt => {
    evt.preventDefault();
    setIsPopupOpen(true);
  }

  return (
    <Router>
      <Header onModalOpen={onModalOpen}/>

      <Switch>
        <Route path='/' component={() => <Home onModalOpen={onModalOpen} />} exact />
        <Route path='/about' component={About} />
        <Route path='/news' component={News} />
        <Route path='/subscription' component={Subscription} />
        <Route path='/contacts' component={Contacts} />
        <Route component={NotFound} />
      </Switch>

      <Footer />

      {
        isPopupOpen ?
        <LoginModal onModalClose={onModalClose}/> : null
      }
    </Router>
  )
}

export default App;

