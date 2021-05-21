import React, { Fragment } from 'react'
import SlidingText from '../../../components/sliding-text/SlidingText'
import '../thingsToDo.css'

const FurtherActivites = () => {
  return <Fragment>
    <SlidingText 
      tag='h4'
      text='Restaurants'
      delay='1'
    />
    <div className='listContainer'>
      <SlidingText 
        tag='a'
        text='Brunch @ The Egg and I'
        delay='1'
        url='https://www.google.com/maps/place/The+Egg+%26+I+Restaurants/@39.5184663,-104.7833517,14z/data=!4m5!3m4!1s0x0:0xeb8f736a260b4379!8m2!3d39.5186889!4d-104.7696009'
      />
      <SlidingText 
        tag='span'
        text='|'
        delay='1'
      />
      <SlidingText 
        tag='a'
        text="Fuzzy's Tacos & Margaritas"
        delay='1'
        url="https://www.google.com/maps/place/Fuzzy's+Taco+Shop/@39.4933423,-104.7630502,15.58z/data=!4m5!3m4!1s0x876c917f7fb4045d:0xbffbbfeac0c44f04!8m2!3d39.4937308!4d-104.7596209"
      />
      <SlidingText 
        tag='span'
        text='|'
        delay='1'
      />
      <SlidingText 
        tag='a'
        text="Adriana's Mexican Restaurant"
        delay='1'
        url="https://www.google.com/maps/place/Adriana's+Mexican+Restaurant/@39.3905511,-104.7597192,15.03z/data=!4m5!3m4!1s0x876c967640f4eebf:0x3aaa9b722b19de1!8m2!3d39.3908927!4d-104.7539759"
      />
    </div>
  </Fragment>
}

export default FurtherActivites