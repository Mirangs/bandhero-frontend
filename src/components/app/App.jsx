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
import Cabinet from '../cabinet/Cabinet';
import NotFound from '../404/404';
import LoginModal from '../login-modal/LoginModal';
import Register from '../register/Register';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  const onModalClose = () => {
    setIsPopupOpen(false);
  }

  const onModalOpen = evt => {
    evt.preventDefault();
    setIsPopupOpen(true);
  }

  const onLogout = () => {
    setIsLogged(false);
    setUser({});
  }

  return (
    <Router>
      <Header onModalOpen={onModalOpen} isLogged={isLogged} login={user.login}/>

      <Switch>
        <Route path='/' component={() => <Home onModalOpen={onModalOpen} />} exact />
        <Route path='/about' component={About} />
        <Route path='/news' component={News} />
        <Route path='/subscription' component={Subscription} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/cabinet' component={() => <Cabinet onLogout={onLogout} isLogged={isLogged} user={user} />}/>
        <Route path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>

      <Footer />

      {
        isPopupOpen ?
        <LoginModal onModalClose={onModalClose} setIsLogged={setIsLogged} setUser={setUser}/> : null
      }
    </Router>
  )
}

export default App;

