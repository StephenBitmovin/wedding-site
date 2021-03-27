import { RsvpRounded } from '@material-ui/icons'
import React from 'react'

const RSVPButton = ({
  activeParty, 
  handleRSVP
}) => {
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
  //https://mmjd.com/github/react-checkmark/
}

export default RSVPButton