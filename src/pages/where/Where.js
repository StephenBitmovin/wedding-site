import React, { useRef, useState, useEffect } from 'react'
// import SlideUpHeaderImage from '../../components/slideUpHeaderImage/SlideUpHeaderImage'
import SlidingText from '../../components/sliding-text/SlidingText'
// import rcmHeader from '../images/running-creek.png'
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import './where.css'

// Marker example
// https://github.com/visgl/react-map-gl/blob/6.1-release/examples/controls/src/pins.js

const Where = () => {

  const [viewport, setViewport] = React.useState({
    latitude: 39.4690746,
    longitude: -104.5793028,
    width: '100%',
    height: '320px',
    zoom: 8
  })

  // const mapContainer = useRef(null)
  // const map = useRef(null)
  // const [lng, setLng] = useState()
  // const [lat, setLat] = useState()
  // const [zoom, setZoom] = useState(9)

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //     map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [lng, lat],
  //     zoom: zoom
  //   })
  // })

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   })
  // })

  const DirectionsWebsite = () => {
    return <h3 className='directionsWebsite'>
      <a href='https://goo.gl/maps/duh8kQRKXxUJqQCo8' target='_blank'>Directions</a>
      <span>|</span>
      <a href='http://runningcreekmanor.com/' target='_blank'>Website</a>
    </h3>
  }

  return <div className='columnContainer where' style={{margin: '10px 0'}}>
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
    <div className='mapWrapper'>
      <ReactMapGL
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={'pk.eyJ1IjoiY29sb3JhZHVkZSIsImEiOiJja29udmd5emgwMTg5MnVwbmNyNTQwbjV5In0.vCWlATlE0sojf304KShj6w'}
      >
        <Marker
          latitude={39.4690746}
          longitude={-104.5793028}
          offsetLeft={-20} 
          offsetTop={-10}
        >
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/1200px-Google_Maps_pin.svg.png'
            style={{width: '20px'}}
          />
        </Marker>
      </ReactMapGL>
    </div>
  </div>
}

export default Where