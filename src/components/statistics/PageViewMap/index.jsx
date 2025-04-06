'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import these from react-leaflet (safe)
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

// Avoid importing 'leaflet' directly at the top
const DynamicMap = ({ locations }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // Dynamically load Leaflet and set up icon
    const loadLeaflet = async () => {
      const L = await import('leaflet');

      const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      setIcon(redIcon);
    };

    // Inject Leaflet CSS
    const existingLink = document.querySelector('link[href*="leaflet.css"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    loadLeaflet();
  }, []);

  const center = locations[0] || [0, 0];

  const bounds = [
    [-85, -180],
    [85, 180],
  ];

  return (
    <div style={{ padding: '0 2rem' }}>
      {icon && (
        <MapContainer
          center={center}
          zoom={2}
          maxBounds={bounds}
          maxBoundsViscosity={1.0}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; OpenStreetMap contributors'
          />
          {locations.map((loc, idx) => (
            <Marker key={idx} position={[loc.lat, loc.lng]} icon={icon} />
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default DynamicMap;
