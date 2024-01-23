"use client"
// GoogleMap.js

import React from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        <Marker position={center}>
          <InfoWindow>
            <div>
              <p>Your Marker Info Window Content</p>
            </div>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
