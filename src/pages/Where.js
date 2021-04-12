import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp'
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'

mapboxgl.workerClass = MapboxWorker
mapboxgl.accessToken = 'pk.eyJ1IjoiY29sb3JhZHVkZSIsImEiOiJjaWY2NnN5MjAwYjVxc21rdTdzdWQwd2NtIn0.4_IhtN06SX3K3moZ1da-cg'



const Where = () => {

  const mapContainer = useRef()

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const windowWidth = window.innerWidth
  const [lng, setLng] = useState(-105.6868417)
  const [lat, setLat] = useState(39.738612)

  // if (windowWidth > 1400){
  //   setLng(-105.6868417)
  //   setLat(39.738612)
  // } else if (windowWidth < 1400 && windowWidth> 941) {
  //   setLng(-105.27237577970509)
  //   setLat(39.69219996292975)
  // } else {
  //   setLng(-105.6868417)
  //   setLat(39.738612)
  // }
  // const [lng, setLng] = useState(-105.6868417)
  // const [lat, setLat] = useState(39.738612)
  const [zoom, setZoom] = useState(8)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // map.addControl(new mapboxgl.Popup({anchor: 'center', offset: 25 }))

    // map.addControl(new mapboxgl.Marker()
    //   .setLngLat([-104.5763702,39.467781])
    //   .setPopup(popup)
    //   .addTo(map)
    // )
    
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4))
      setLat(map.getCenter().lat.toFixed(4))
      setZoom(map.getZoom().toFixed(2))

      console.log('LAT', map.getCenter().lng, 'LON', map.getCenter().lat)
      console.log(window.innerWidth)
    })

    return () => map.remove()
  }, [])

  return <div className='mapArea'>
      <div className="mapContainer" ref={mapContainer} />
      {/* <script>
        mapboxgl.accessToken = 'pk.eyJ1IjoiY29sb3JhZHVkZSIsImEiOiJjaWY2NnN5MjAwYjVxc21rdTdzdWQwd2NtIn0.4_IhtN06SX3K3moZ1da-cg'
        
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-105.6868417,39.738612],
          zoom: 8
        })
        
        var directions = 'https://www.google.com/maps/dir/Denver,+Colorado/Running+Creek+Manor,+4739+Co+Rd+166,+Elizabeth,+CO+80107/@39.6214154,-104.9357636,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x876b80aa231f17cf:0x118ef4f8278a36d6!2m2!1d-104.990251!2d39.7392358!1m5!1m1!1s0x876ceddc321d0f0b:0xf97644c7ac599aae!2m2!1d-104.5763702!2d39.467781!3e0'
        
        var website = 'http://runningcreekmanor.com/'
        
        var image = 'https://instagram.fapa1-2.fna.fbcdn.net/v/t51.2885-15/e35/67185697_492766678202608_4328725037811613457_n.jpg?_nc_ht=instagram.fapa1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=-OZbiGfhPp8AX9-JGng&_nc_tp=18&oh=7bf54ce5ce28b37ff874ddb6d7d1c171&oe=5F8BBE87'
        
        var popup = new mapboxgl.Popup({anchor: 'center', offset: 25 }).setHTML(
          `<div class="popup-container">
            <a class='website-link-header' href=${website} target='_blank'>
            Running Creek Manor
            </a>
            <img src=${image} />
            <div class='thumb-links'>
              <a href=${directions} target='_blank'>
              Directions
              </a>
              <span>|</span>
              <a href=${website} target='_blank'>Website
            </div>
          </div>`
        )
        
        new mapboxgl.Marker()
          .setLngLat([-104.5763702,39.467781])
          .setPopup(popup)
          .addTo(map)
          
        map.addControl(new mapboxgl.NavigationControl(), 'top-left')
        map.scrollZoom.disable()
        map.on('load', () => map.resize())

        // const map = document.querySelector('#map').offsetHeight

        // map.setAttribute('height', map.offsetHeight)
        
      </script> */}
  </div>
}

export default Where