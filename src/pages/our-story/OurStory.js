import React, { useState } from 'react'
import SlidingText from '../../components/sliding-text/SlidingText'
// import { Carousel } from 'react-responsive-carousel'
import Carousel, { Modal, ModalGateway } from 'react-images';
import './ourStory.css'

const OurStory = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const images = [
    {src: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/puppy-410265.jpg?h=0c7c9985&itok=ZQixcJRY'}
  ]

  return <div className='columnContainer ourStory'>
    <SlidingText
      tag='h1'
      text='Our Story'
      delay='0'
    />
    <SlidingText
      tag='p'
      text='Mikayla and Stephen met 10 years ago in spanish class at Ponderosa High School. After dating for all this time they were finally engaged in December of 2019 just outside of Winter Park, Colorado. Mikayla and Stephen spend their time with their two dogs, Wilson the Corgi and Yukon the Aussie, and in the mountains.'
      delay='1'
    />

    

    <ModalGateway>
      {modalIsOpen ? (
        <Modal onClose={setModalIsOpen(false)}>
          <Carousel views={images} />
        </Modal>
      ) : null}
    </ModalGateway>

    {/* <Carousel
      showArrows={true} 
      // onChange={onChange} 
      // onClickItem={onClickItem} 
      // onClickThumb={onClickThumb}
    >
     <div>
        <img src='https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/puppy-410265.jpg?h=0c7c9985&itok=ZQixcJRY'/>
      </div> 
    </Carousel> */}

    {/* <button onClick={() => setModalIsOpen(true)}>Click me */}
    {/* </button> */}

  </div>
}

export default OurStory