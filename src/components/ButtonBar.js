import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../pages/Home'
import Where from '../pages/Where'
import Registry from '../pages/Registry'
import RSVP from '../pages/RSVP'
import OurStory from '../pages/OurStory'
import Accommodations from '../pages/Accommodations'
import ThingsToDo from '../pages/ThingsToDo'

const ButtonBar = () => {
  return <Router>
    <div className='cardContent'>
      <div className='mainContentContainer'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/where">
            <Where />
          </Route>
          <Route path="/our-story">
            <OurStory />
          </Route>
          <Route path="/accommodations">
            <Accommodations />
          </Route>
          <Route path="/things-to-do">
            <ThingsToDo />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
          <Route path="/RSVP">
            <RSVP />
          </Route>
        </Switch>
      </div>
      <div className='buttonBar'>
        <Link to='/'>
          <button className='linkButton'>
            When
          </button>
        </Link>
        <Link to='/where'>
          <button className='linkButton'>
            Where
          </button>
        </Link>
        <Link to='/about-us'>
          <button className='linkButton'>
            Our Story
          </button>
        </Link>
        <Link to='/accomodations'>
          <button className='linkButton'>
            Accommodations
          </button>
        </Link>
        <Link to='/things-to-do'>
          <button className='linkButton'>
            Things To Do
          </button>
        </Link>
        <Link to='/registry'>
          <button className='linkButton'>
            Registry
          </button>
        </Link>
        <Link to='/RSVP' className='RSVPButton'>
          <button className='linkButton'>
            RSVP
          </button>
        </Link>
      </div>
    </div>
    </Router>
}

export default ButtonBar