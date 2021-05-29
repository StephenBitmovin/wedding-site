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
    {/* <h4>
      <SlidingText 
        tag='a'
        text='Ascent On Main (Formerly Lazlo)'
        delay='1'
        url='https://www.phgsecure.com/IBE/bookingRedirect.ashx?propertyCode=DENPP&group=MFW2021&arrivalDate=07-09-2021&departureDate=07-11-2021&numberOfNights=1&numberOfAdults=1'
        additionalClasses='fontSize25'
      />
    </h4> */}
    {/* <SlidingText
      tag='span'
      text='Phone: 720-572-1910 | Address: 18595 Mainstreet, Parker'
      delay='1'
    />  */}
    <h4>
      <SlidingText 
        tag='a'
        text='Springhill Suites'
        delay='1'
        url='https://www.marriott.com/events/start.mi?id=1618270518085&key=GRP'
        additionalClasses='fontSize25'
      />
    </h4>
    <SlidingText 
      tag='span'
      text='Phone: 303-841-6700 | Address: 9355 Silverado Drive, Parker'
      delay='1'
    />
    <h4>
      <SlidingText 
        tag='a'
        text='Holiday Inn Parker'
        delay='2'
        url='https://www.holidayinn.com/redirect?path=hd&brandCode=HI&localeCode=en&regionCode=1&hotelCode=denpr&_PMID=99801505&GPC=MFW&cn=no&viewfullsite=true'
        additionalClasses='fontSize25'
      />
    </h4>
    <SlidingText
      tag='span'
      text='Phone: 303-248-2147 | 19308 E. Cottonwood Drive, Parker'
      delay='2'
    />
    <h4>
      <SlidingText 
        tag='a'
        text='Airbnb'
        url='https://www.airbnb.com/s/homes?search_type=unknown&tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=june&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&ne_lat=39.607746070082165&ne_lng=-104.37398772760355&sw_lat=39.182181227051764&sw_lng=-105.00020843072855&zoom=11&search_by_map=true&place_id=ChIJg0Uf7Cp5bIcRxcPMdiapsPI'
        additionalClasses='fontSize25'
        delay='3'
      />
    </h4>
    <SlidingText
      tag='span'
      text='Feel free to find a place of your own'
      delay='3'
    />
  </div>
}

export default Accommodations