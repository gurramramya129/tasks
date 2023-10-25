import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";

const LocationMap = () => {
  const [position, setPosition] = useState(null);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);

        const provider = new OpenStreetMapProvider();
        provider
          .search({ query: `${latitude}, ${longitude}` })
          .then((results) => {
            if (results.length > 0) {
              setLocationName(results[0].label);
            }
          })
          .catch((error) => {
            console.error("Error geocoding location: ", error);
          });
      });
    }
  }, []);

  const icon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="map-container">
      <Map center={position} zoom={13} style={{ height: "400px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {position && (
          <Marker position={position} icon={icon}>
            <Popup>Your location: {locationName}</Popup>
          </Marker>
        )}
      </Map>
    </div>
  );
};

export default LocationMap;