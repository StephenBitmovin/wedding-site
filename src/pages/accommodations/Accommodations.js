import React from 'react'
import SlidingText from '../../components/sliding-text/SlidingText'
import './accommodations.css'

const Accommodations = () => {
  return <div className='columnContainer'>
    <SlidingText 
      tag='h1'
      text='Accommodations'
      delay='0'
    />
    <h4>
      <SlidingText 
        tag='a'
        text='Ascent On Main (Formerly Lazlo)'
        delay='1'
        url='https://www.phgsecure.com/IBE/bookingRedirect.ashx?propertyCode=DENPP&group=MFW2021&arrivalDate=07-09-2021&departureDate=07-11-2021&numberOfNights=1&numberOfAdults=1'
        additionalClasses='fontSize25'
      />
    </h4>
    <SlidingText
      tag='span'
      text='Phone: 720-572-1910 | Address: 18595 Mainstreet, Parker'
      delay='1'
    />
    <h4>
      <SlidingText 
        tag='a'
        text='Springhill Suites'
        delay='2'
        url='https://www.marriott.com/events/start.mi?id=1618270518085&key=GRP'
        additionalClasses='fontSize25'
      />
    </h4>
    <SlidingText 
      tag='span'
      text='Phone: 303-841-6700 | Address: 9355 Silverado Drive, Parker'
      delay='2'
    />
    <h4>
      <SlidingText 
        tag='a'
        text='Holiday Inn Parker'
        delay='3'
        url='https://www.marriott.com/hotels/travel/denpk-springhill-suites-denver-parker/'
        additionalClasses='fontSize25'
      />
    </h4>
    <SlidingText
      tag='span'
      text='Phone: 303-248-2147 | 19308 E. Cottonwood Drive, Parker'
      delay='3'
    />
  </div>
}

export default Accommodations