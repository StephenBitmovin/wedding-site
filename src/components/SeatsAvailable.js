import React from 'react'

const SeatsAvailable = ({seats}) => {
  return (
    <div className='seatsAvailable'>
      {seats > 0 ? 
      `You have ${seats} seat${seats > 1 ? 's' : ''} 
      reserved` : ''}
    </div>
  )
}

export default SeatsAvailable