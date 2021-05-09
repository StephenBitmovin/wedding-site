import React from 'react'
// import SlideUpHeaderImage from '../../components/slideUpHeaderImage/SlideUpHeaderImage'
import SlidingText from '../../components/sliding-text/SlidingText'
// import rcmHeader from '../images/running-creek.png'

const Where = () => {

  const DirectionsWebsite = () => {
    return <h3 className='directionsWebsite'>
      <a href='https://goo.gl/maps/duh8kQRKXxUJqQCo8' target='_blank'>Directions</a>
      <span>|</span>
      <a href='http://runningcreekmanor.com/' target='_blank'>Website</a>
    </h3>
  }

  return <div className='columnContainer' style={{margin: '10px 0'}}>
    <SlidingText 
      tag='h1'
      text='Running Creek Manor'
      delay='0'
    />
    <SlidingText 
      tag='p'
      text='Our venue is an outdoor paradise with a lake and plenty of space to prevent the spread of PANDEMIC'
      delay='1'
    />
    <SlidingText 
      tag='component'
      delay='2'
    >
      <DirectionsWebsite />
    </SlidingText>
  </div>
}

export default Where