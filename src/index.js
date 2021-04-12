import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css/animate.compat.css'
import GuestSelector from './GuestSelector';
import reportWebVitals from './reportWebVitals';
import './new-css.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Where from './pages/Where'
import Registry from './pages/Registry'
import RSVP from './pages/RSVP'
import ButtonBar from './components/ButtonBar'
import { Button } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <div className='main'></div>
    <div className='cardContainer'>
      <div className='smallSection'></div>
      <div className='card'>
        <div id='root'>
        <ButtonBar/>
          {/* <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/where">
                <Where />
              </Route>
              <Route path="/registry">
                <Registry />
              </Route>
              <Route path="/RSVP">
                <RSVP />
              </Route>
            </Switch>
          </Router> */}
        </div>
        
      </div>
      <div className='smallSection'></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
