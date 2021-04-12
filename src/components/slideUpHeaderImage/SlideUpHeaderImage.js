import React from 'react'
import './slideUpHeaderImage.css'

const SlideUpHeaderImage = ({text, backgroundImage}) => {

  const styles = {
    // backgroundImage: `url(${backgroundImage})`,
    // backgroundSize: '100%',
    // filter: 'blur(0)'
  }

  return <div className='slideUpHeaderBanner' style={styles}>
    <img src={backgroundImage}/>
    <h1 className='fadeInUp'>{text}</h1>
  </div>
}

export default SlideUpHeaderImage