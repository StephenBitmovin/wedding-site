import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GuestCheckbox = ({activeParty, handleCheck}) => {
  return <FormGroup row className='checkboxes'>
    {activeParty.map((guest, i) => {
      return <FormControlLabel
        key={i}
        control={
          <Checkbox 
            checked={guest.isChecked} 
            onChange={handleCheck} 
            name={guest.name}
          />}
        label={guest.name}
      />
    })}
  </FormGroup>
}

export default GuestCheckbox
