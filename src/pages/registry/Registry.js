import React from 'react'
import SlidingText from '../../components/sliding-text/SlidingText'
import './registry.css'

const Registry = () => {
  return <div className='columnContainer'>
    {/* <h1 className='fontLarge'>Registry</h1>
    <a href=''>Adventures</a>
    <a href=''>Things</a>
    <a href=''>Honeymoon</a>
    <a href=''>Full List</a>
    https://registry.theknot.com/mikayla-martz-stephen-florian-july-2021/41402941 */}
    <SlidingText 
      tag='h1'
      text='Registry'
      delay='0'
    />
    {/* <h3>
      <SlidingText 
        tag='a'
        text='Adventures'
        url=''
        delay='1'
      />
    </h3>
    <h3>
      <SlidingText 
        tag='a'
        text='Things'
        url=''
        delay='2'
      />
    </h3>
    <h3>
      <SlidingText 
        tag='a'
        text='Honeymoon Fund'
        url=''
        delay='3'
      />
    </h3> */}
    <h3>
      <SlidingText 
        tag='a'
        text='Click to see our full registry'
        url='https://registry.theknot.com/mikayla-martz-stephen-florian-july-2021/41402941'
        delay='4'
      />
    </h3>

    {/* <a href=''>Adventures</a>
    <a href=''>Things</a>
    <a href=''>Honeymoon</a>
    <a href=''>Full List</a> */}
    {/* <iframe title='registry' src='https://www.theknot.com/us/mikayla-martz-and-stephen-florian-jul-2021/registry'></iframe> */}
  </div>
  
  // <div className='registry'>
  //   <iframe title='registry' src='https://www.theknot.com/us/mikayla-martz-and-stephen-florian-jul-2021/registry'></iframe>
  //   <a href='https://www.theknot.com/us/mikayla-martz-and-stephen-florian-jul-2021/registry'>
  //     <button>Click to view full registry</button>
  //   </a>
  // </div>
}

export default Registry