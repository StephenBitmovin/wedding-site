import React from 'react'
import GuestCheckbox from '../components/GuestCheckbox'
import PartySelect from '../components/PartySelect'
import RSVPButton from '../components/RSVPButton'
import SeatsAvailable from '../components/SeatsAvailable'
import GuestSelector from '../GuestSelector'

const RSVP = () => {
  return <div className='guestSelectorWrapper flexColumn RSVP'>
    <div className='RSVPHeadline'>
      <h1>
      Reserve your spot
      </h1>
    </div>
    <GuestSelector />
  </div>
}

export default RSVP