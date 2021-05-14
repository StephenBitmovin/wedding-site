import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../../pages/home/Home'
import Where from '../../pages/where/Where'
import Registry from '../../pages/registry/Registry'
import RSVP from '../../pages/RSVP/RSVP'
import OurStory from '../../pages/our-story/OurStory'
import Accommodations from '../../pages/accommodations/Accommodations'
import ThingsToDo from '../../pages/things-to-do/ThingsToDo'
import { slide as Menu } from 'react-burger-menu'

import './buttonBar.css'

const ButtonBar = () => {

  const [isMenuOpen, setMenuState] = useState(false)

  // const setMenuState = () => {
  //  [isMenuOpen] = false
  // }
  return <Router>
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
      {/* <Route path="/registry">
        <Registry />
      </Route> */}
      <Route path="/accommodations">
        <Accommodations />
      </Route>
      <Route path="/things-to-do">
        <ThingsToDo />
      </Route>
      <Route path="/RSVP">
        <RSVP />
      </Route>
    </Switch>
        
    <div className='cardContent'>
      <div className='mainContentContainer'>
      <Menu noOverlay isOpen={isMenuOpen}>
        <Link to='/' onClick={setMenuState}>
          Home
        </Link>
        <Link to='/where' onClick={setMenuState}>
          Where
        </Link>
        <Link to='/our-story' onClick={setMenuState}>
          Our Story
        </Link>
        <Link to='/registry' onClick={setMenuState}>
          Registry
        </Link>
        <Link to='/accommodations' onClick={setMenuState}>
          Accommodations
        </Link>
        <Link to='/things-to-do' onClick={setMenuState}>
          Things To Do
        </Link>
        <Link to='/RSVP' className='mobileRSVPButton' onClick={setMenuState}>
          RSVP
        </Link>
      </Menu>
        
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
        <Link to={{pathname: 'https://registry.theknot.com/mikayla-martz-stephen-florian-july-2021/41402941'}} target='_blank'>
          <button className='linkButton'>
            Registry
          </button>
        </Link>
        <Link to='/our-story'>
          <button className='linkButton'>
            Our Story
          </button>
        </Link>
        <Link to='/accommodations'>
          <button className='linkButton'>
            Accommodations
          </button>
        </Link>
        <Link to='/things-to-do'>
          <button className='linkButton'>
            Things To Do
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