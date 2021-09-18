import React from 'react'
import { compose, withProps } from "recompose"
import {
    GoogleApiWrapper,
    Map,
    Marker,
    GoogleMap,
    // InfoWindow,
    withScriptjs,
    withGoogleMap,
    // DirectionsRenderer,
  } from 'react-google-maps'

//AIzaSyAFcXFkg04Gt0M_ILtk-t7kHTmo_2W5T-U
  const mapStyles = {
    width: '100%',
    height: '100%'
  };
  

  const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  )
  

  export default (MyMapComponent);
  