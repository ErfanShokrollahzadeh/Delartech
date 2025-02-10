import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issues with webpack/Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;

// Create custom green marker icon
const greenIcon = new L.Icon({
  iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function LeafletMap() {
  // Define office locations
  const offices = [
    { name: "Santa Monica, California", location: [34.0195, -118.4912], address: "312 Arizona Ave, Santa Monica, CA 90401" },
    { name: "Sunnyvale, California", location: [37.3688, -122.0363], address: "1309 S Mary Ave, Suite 206, Sunnyvale CA 94087" },
    { name: "Ontario, Canada", location: [43.5890, -79.6441], address: "2 Robert speck pkwy, Mississauga, Ontario L4Z1H8" },
    { name: "Shanghai, China", location: [31.2304, 121.4737], address: "NO.35 Boxia RD, Pudong Shanghai, 201203" }
  ];

  // Map configuration with centered view
  const mapConfig = {
    center: [30, 0], // Centered to show all offices
    zoom: 2,
    minZoom: 2.3,
    maxBounds: [[-90, -180], [90, 180]],
    maxBoundsViscosity: 1.0
  };

  return (
    <div className="w-full h-full rounded-xl overflow-hidden border-2 border-green-500/20">
      <MapContainer
        center={mapConfig.center as L.LatLngExpression}
        zoom={mapConfig.zoom}
        minZoom={mapConfig.minZoom}
        maxBounds={mapConfig.maxBounds as L.LatLngBoundsExpression}
        maxBoundsViscosity={mapConfig.maxBoundsViscosity}
        style={{ height: '100%', width: '100%' }}
        className="z-0" // Ensure map stays behind other elements
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
          className="" // Add custom styling for dark theme
        />
        {offices.map((office, index) => (
          <Marker 
            key={index} 
            position={office.location as L.LatLngExpression}
            icon={greenIcon}
          >
            <Popup className="custom-popup">
              <div className="text-black">
                <h3 className="font-bold">{office.name}</h3>
                <p>{office.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
