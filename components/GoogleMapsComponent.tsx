import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React from "react";

function GoogleMapView() {
  const mapRef = React.useRef<google.maps.Map | null>(null);
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "";

  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const center = {
    lat: -1.286389, // The initial center doesn't matter, as it will be updated to fit the markers.
    lng: 36.817223,
  };

  const locationList = [
    { id: 1, name: "Nairobi", lat: -1.286389, lng: 36.817223 },
    { id: 2, name: "Mexico City", lat: 19.432608, lng: -99.133209 },
    { id: 3, name: "Washington D.C.", lat: 38.89511, lng: -77.036366 },
  ];

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={API_KEY} mapIds={["327f00d9bd231a33"]}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2}
          onLoad={onLoad}
        >
          {locationList.map((location) => (
            <MarkerF
              key={location.id}
              position={{ lat: location.lat, lng: location.lng }}
              title={location.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
