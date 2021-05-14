import React from 'react'
import SlidingText from '../../components/sliding-text/SlidingText'
import GuestSelector from '../../GuestSelector'

import './RSVP.css'

import { createMuiTheme } from '@material-ui/core/styles';

const RSVP = () => {
  return <div className='guestSelectorWrapper flexColumn RSVP'>
    {/* <div className='RSVPHeadline'>
      <h1>
      Reserve your spot
      </h1>
    </div> */}
    <SlidingText 
      tag='h1'
      text='Reserve Your Spot'
      delay='0'
    />
    <SlidingText 
      tag='component'
      delay='1'
    >
      <GuestSelector />
    </SlidingText>

    {/* <GuestSelector /> */}
  </div>
}

export default RSVP