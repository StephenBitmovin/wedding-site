import React from 'react'
import SlidingText from '../../components/sliding-text/SlidingText'

import CloseRestaurants from './components/CloseRestaurants'
import CloseBreweries from './components/CloseBreweries'
import CloseActivities from './components/CloseActivities'
import FurtherRestaurants from './components/FurtherRestaurants'
import FurtherBreweries from './components/FurtherBreweries'
import FurtherActivities from './components/FurtherActivities'

import './thingsToDo.css'

const ThingsToDo = () => {
  return <div className='columnContainer thingsToDo'>
    <SlidingText
      tag='h1'
      text='Things To Do'
      delay='0'
    />
    <SlidingText
      tag='h3'
      text='Close To Venue'
      delay='1'
    />
    <CloseRestaurants />
    <CloseBreweries />
    <CloseActivities />

    <SlidingText
      tag='h3'
      text='A Little Further Away'
      delay='2'
    />
    
      Food
      Breweries
      Activities


  </div>
}

export default ThingsToDo