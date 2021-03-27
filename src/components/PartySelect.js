import React from 'react'
import Select from 'react-select'

const PartySelect = ({parties, handleSelect}) => {
  return <Select 
    className='GuestSelector'
    options={parties}
    onChange={handleSelect}
    // onMenuOpen={clearSelection}
    placeholder='Search or select your party...'
    noOptionsMessage={() => {'Sorry, try searching a first or last name'}}
  />
}

export default PartySelect