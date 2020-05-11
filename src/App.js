import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './Common/Header';
import { Home } from './Home/Home';
import { Profile } from './Profile/Profile';
import { Login } from './Auth/Login';
import './App.css'
import { ProtectedRoute } from './Common/ProtectedRoute';

export const App = () => {
  return (
      <div className='app'>
          <Header />
          <Switch>
              <Route path={'/'} exact>
                  <Home />
              </Route>
              <ProtectedRoute path={'/profile'}>
                  <Profile />
              </ProtectedRoute>
              <Route path={'/login'}>
                  <Login />
              </Route>
          </Switch>
      </div>
  );
};