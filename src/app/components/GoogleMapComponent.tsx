'use client'
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 25.3176,
  lng: 82.9739,
};



const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDaclrl9SdPUah6kMRCYgdLbZD6zYgJdQA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {/* Child components, such as markers, can be added here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
