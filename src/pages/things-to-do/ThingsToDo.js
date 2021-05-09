import React from 'react'
import SlidingText from '../../components/sliding-text/SlidingText'

const ThingsToDo = () => {
  return <div className='columnContainer'>
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
      Food
      Breweries
      Activities
    <SlidingText
      tag='h3'
      text='A Little Further Away'
      delay='1'
    />
      Food
      Breweries
      Activities


  </div>
}

export default ThingsToDo