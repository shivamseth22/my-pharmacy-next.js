'use client'
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { usePathname } from "next/navigation";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 25.3176,
  lng: 82.9739,
};



const GoogleMapComponent = () => {
  const pathname = usePathname();
  const route = pathname;
  const routeWithoutSlash = route.slice(1); // This removes the leading slash
  console.log(routeWithoutSlash);
  return (
    <LoadScript
    language={routeWithoutSlash}
    googleMapsApiKey="AIzaSyDaclrl9SdPUah6kMRCYgdLbZD6zYgJdQA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {/* Child components, such as markers, can be added here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
