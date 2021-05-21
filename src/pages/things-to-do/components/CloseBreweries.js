import React, { Fragment } from 'react'
import SlidingText from '../../../components/sliding-text/SlidingText'
import '../thingsToDo.css'

const CloseBreweries = () => {
  return <Fragment>
    <SlidingText 
      tag='h4'
      text='Breweries'
      delay='1'
    />
    <div className='listContainer'>
      <SlidingText 
        tag='a'
        text='105 West'
        delay='1'
        url='https://www.google.com/maps/place/105+West+Brewing+Company/@39.3817876,-104.8776919,14.86z/data=!4m5!3m4!1s0x876c98379db84bbf:0x2d5501ba35999ee5!8m2!3d39.3811365!4d-104.8677044'
      />
      <SlidingText 
        tag='span'
        text='|'
        delay='1'
      />
      <SlidingText 
        tag='a'
        text="Great Divide Brewery & Restaurant"
        delay='1'
        url="https://www.google.com/maps/place/Great+Divide+Brewery+%26+Roadhouse/@39.3711098,-104.8672368,15.57z/data=!4m12!1m6!3m5!1s0x876c983d98daaaab:0x4cdfab788e34b11!2sGreat+Divide+Brewery+%26+Roadhouse!8m2!3d39.3716136!4d-104.8604077!3m4!1s0x876c983d98daaaab:0x4cdfab788e34b11!8m2!3d39.3716136!4d-104.8604077"
      />
    </div>
  </Fragment>
}

export default CloseBreweries