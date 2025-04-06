// components/DynamicMap.jsx
'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';

const redIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const DynamicMap = ({ locations }) => {
  useEffect(() => {
    const existingLink = document.querySelector('link[href*="leaflet.css"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
  }, []);

  const center = locations[0] || [0, 0];

  const bounds = [
    [-85, -180],
    [85, 180],
  ];

  return (
    <MapContainer
      center={center}
      zoom={2}
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
      style={{ height: 'auto', width: '100%', maxHeight: '75vh', maxWidth: "90%", aspectRatio: '1/1'}}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; OpenStreetMap contributors'
      />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]} icon={redIcon} />
      ))}
    </MapContainer>
  );
};

export default DynamicMap;
