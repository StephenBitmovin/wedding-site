import React, { Fragment } from 'react'
import SlidingText from '../../../components/sliding-text/SlidingText'
import '../thingsToDo.css'

const CloseActivities = () => {
  return <Fragment>
    <SlidingText 
      tag='h4'
      text='Activites'
      delay='1'
    />
    <div className='listContainer'>
      <SlidingText 
        tag='a'
        text='Castlewood Canyon State Park'
        delay='1'
        url='https://www.google.com/maps/place/Castlewood+Canyon+State+Park/@39.3333107,-104.7483599,15.03z/data=!4m12!1m6!3m5!1s0x876cbe70782828f5:0x7b83e016f4ee4c57!2sCastlewood+Canyon+State+Park!8m2!3d39.3336344!4d-104.7401173!3m4!1s0x876cbe70782828f5:0x7b83e016f4ee4c57!8m2!3d39.3336344!4d-104.7401173'
      />
      <SlidingText 
        tag='span'
        text='|'
        delay='1'
      />
      <SlidingText 
        tag='a'
        text="Philip S. Miller Park"
        delay='1'
        url="https://www.google.com/maps/place/Philip+S.+Miller+Park,+1375+W+Plum+Creek+Pkwy,+Castle+Rock,+CO+80109/@39.3703005,-104.8869789,15z/data=!3m1!4b1!4m5!3m4!1s0x876c9842fb40e3d1:0x3b3587c205484d0a!8m2!3d39.3703014!4d-104.8782241"
      />
      
    </div>
  </Fragment>
}

export default CloseActivities