import React from 'react'
import SlidingText from '../../components/sliding-text/SlidingText'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const Home = () => {

  const weddingIsThisMany = dayjs('7/10/21').diff(dayjs(), 'days')

  return <div className='columnContainer'>
    {/* <h1 className='fontLarge'>Mikayla & Stephen</h1> */}
    <SlidingText 
      tag='h4'
      text='Together with their families'
      delay='0'
    />
    <SlidingText 
      tag='h1'
      text='Mikayla & Stephen'
      delay='1'
    />
    <SlidingText 
      tag='h4'
      text='joyfully invite you to our wedding on'
      delay='2'
    />
    <SlidingText 
      tag='h2'
      text='July 10th, 2021 @ 4:30PM'
      delay='3'
    />

    <SlidingText 
      tag='h1'
      text={`${weddingIsThisMany} days from today`}
      delay='4'
    />

    {/* <p>Bring your ass to our wedding</p>
    <h1>July 10th, 2021 @ 4:30PM</h1> */}
    
  </div>
}

export default Home