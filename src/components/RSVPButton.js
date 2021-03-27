import React from 'react'
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const RSVPButton = ({activeParty, handleRSVP}) => {
  const enabled = activeParty.filter(guest => guest.isChecked).length

  return <Button 
    variant='contained' 
    size='large'
    disabled={!enabled}
    onClick={handleRSVP}
    endIcon={<Icon>send</Icon>}
  >
    {`${enabled > 1 ? 'We': 'I'}'ll be there!`}
  </Button>
}

export default RSVPButton