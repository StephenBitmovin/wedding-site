import React, { useState } from 'react'
import PartySelect from './components/PartySelect'
import SeatsAvailable from './components/SeatsAvailable'
import RSVPButton from './components/RSVPButton'
import GuestCheckbox from './components/GuestCheckbox'

import guestList from './guest-list'
import CheckIcon from './icons/CheckIcon'

const parties = Object.getOwnPropertyNames(guestList)
  .map(party => ({
    label: party, 
    value: party
  }))

const GuestSelector = () => {

  const [activeParty, setActiveParty] = useState([])
  const [activePartyName, setActivePartyName] = useState('')
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleSelect = party => {
    const guests = guestList[party.value].map(guest => {
      return {isChecked: false, ...guest}
    })
    setActivePartyName(party.value)
    setActiveParty(guests)
  }

  const handleCheck = e => {
    const updated = activeParty.map(guest => {
      if (guest.name === e.target.name && guest.isChecked){
        console.log('Should not be checked')
        guest = {isChecked: false, name: guest.name}
      } else if (guest.name === e.target.name && !guest.isChecked){
        console.log('Should be checked')
        guest = {isChecked: true, name: guest.name}
      } 
      return guest
    })
    setActiveParty(updated)
  }

  const handleRSVP = () => {
    const body = {[activePartyName]: activeParty.filter(guest => guest.isChecked)}
    console.log(body)
    fetch('http://localhost:5050/rsvp', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then(res => {
      setIsConfirmed(true)
    })
    .catch(e => setIsConfirmed(true))
  }

  const partySelectProps = {parties, handleSelect}
  const seatsAvailableProps = {seats: activeParty.length}
  const guestCheckboxProps = {activeParty, handleCheck}
  const RSVPButtonProps = {activeParty, handleRSVP}

  const GuestForm = () => {
    return <React.Fragment>
      <PartySelect {...partySelectProps}/>
      <SeatsAvailable {...seatsAvailableProps}/>
      <GuestCheckbox {...guestCheckboxProps}/>
      {!!activeParty.length ? <RSVPButton {...RSVPButtonProps}/> : ''}
    </React.Fragment>
  }

  const SuccessfulRSVP = () => {
    return (
      <div className='successfulRSVP'>
        <div className='checkIconWrapper'>
          <CheckIcon />
        </div>
        <span>Thanks your reservation was successful!</span>
      </div>
    )
  }

  return (
    <div className="guestSelectorContainer">
      {!isConfirmed ? <GuestForm/> : <SuccessfulRSVP/>}
    </div>
  );
}

export default GuestSelector;
