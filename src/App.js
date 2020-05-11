import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './Common/Header';
import { Home } from './Home/Home';
import { Profile } from './Profile/Profile';
import { Login } from './Auth/Login';
import './App.css'

export const App = () => {
  return (
      <div className='app'>
          <Header />
          <Switch>
              <Route path={'/'} exact>
                  <Home />
              </Route>
              <Route path={'/profile'}>
                  <Profile />
              </Route>
              <Route path={'/login'}>
                  <Login />
              </Route>
          </Switch>
      </div>
  );
};