import React from 'react'
import SlideUpHeaderImage from '../components/slideUpHeaderImage/SlideUpHeaderImage'
import SlidingText from '../components/sliding-text/SlidingText'
import rcmHeader from '../images/running-creek.png'

const Where = () => {
  return <div className='columnContainer' style={{margin: '10px 0'}}>
    {/* <SlideUpHeaderImage 
      backgroundImage={rcmHeader}
      text='Running Creek Manor'
    /> */}
    <SlidingText 
      tag='h1'
      text='Running Creek Manor'
      animation
    />
  </div>
}

export default Where