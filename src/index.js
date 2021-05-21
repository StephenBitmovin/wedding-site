import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css/animate.compat.css'
import './new-css.css'

import ButtonBar from './components/button-bar/ButtonBar'
import MobileMenu from './components/mobile-menu/MobileMenu'

ReactDOM.render(
  <React.StrictMode>
    <div className='main'>
      {/* <div className='mobileMenu'>
        <MobileMenu />
      </div> */}
    </div>
    <div className='cardContainer'>
      {/* <div> */}
        <div className='smallSection'></div>
        <div className='card'>
          <div id='root'>
          <ButtonBar/>
          </div>
        </div>
      {/* </div> */}
      <div className='smallSection'></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);