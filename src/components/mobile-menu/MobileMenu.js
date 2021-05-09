import React from 'react'
import { slide as Menu } from 'react-burger-menu'
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

import './mobileMenu.css'

const MobileMenu = () => {
  return <Router>
    <Menu>
      <Link to='/'>
        Home
      </Link>
      <Link to='/where'>
        Where
      </Link>
      <Link to='/our-story'>
        Our Story
      </Link>
      <Link to='/accommodations'>
        Accommodations
      </Link>
      <Link to='/things-to-do'>
        Things To Do
      </Link>
      <Link to='/registry'>
        Registry
      </Link>
      <Link to='/RSVP' className='mobileRSVPButton'>
        RSVP
      </Link>
    </Menu>
  </Router>
}

export default MobileMenu