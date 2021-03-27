import React, { Component, useState } from 'react'
import PartySelect from './components/PartySelect'
import SeatsAvailable from './components/SeatsAvailable'
import RSVPButton from './components/RSVPButton'
import FormGroup from '@material-ui/core/FormGroup';
import GuestCheckbox from './components/GuestCheckbox'

import './App.css';
import guestList from './guest-list'
import CheckIcon from './icons/check.svg'

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

  const clearSelection = () => {
    setActiveParty([])
  }

  const handleCheck = e => {
    const updated = activeParty.map(guest => {
      if (guest.name === e.target.name && guest.isChecked){
        guest = {isChecked: false, name: guest.name}
      } else if (guest.name === e.target.name && !guest.isChecked){
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
    .catch(e => console.error(e))
  }

  const partySelectProps = {parties, handleSelect}
  const RSVPButtonProps = {activeParty, handleRSVP}
  const guestCheckboxProps = {activeParty, handleCheck}

  return (
    <div className="guestSelectorContainer">

      <PartySelect {...partySelectProps}/>
      <SeatsAvailable seats={activeParty.length}/>
      <GuestCheckbox {...guestCheckboxProps}/>
      {/* <FormGroup row className='checkboxes'>
        {activeParty.map((guest, i) => {
          return <FormControlLabel
            key={i}
            control={
              <Checkbox 
                isChecked={guest.isChecked} 
                onChange={handleCheck} 
                name={guest.name}
              />}
            label={guest.name}
          />
        })}
      </FormGroup> */}
      {!!activeParty.length ? <RSVPButton {...RSVPButtonProps}/> : ''}
    
    </div>
  );
}

export default GuestSelector;
