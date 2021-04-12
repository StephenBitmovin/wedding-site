import React from 'react'
import ButtonBar from '../components/ButtonBar'
import SlidingText from '../components/sliding-text/SlidingText'

const Home = () => {
  return <div className='columnContainer'>
    {/* <h1 className='fontLarge'>Mikayla & Stephen</h1> */}
    <SlidingText 
      tag='h1'
      text='Mikayla & Stephen'
      delay='0'
    />
    <SlidingText 
      tag='p'
      text='Bring your butt to our wedding'
      delay='1'
    />
    <SlidingText 
      tag='h2'
      text='July 10th, 2021 @ 4:30PM'
      delay='2'
    />
    {/* <p>Bring your ass to our wedding</p>
    <h1>July 10th, 2021 @ 4:30PM</h1> */}
    
  </div>
}

export default Home