import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { searchBirdsInBox, getSpeciesImage } from '../services/xenoCanto';
import L from 'leaflet';

// Fix for default leaflet marker icons in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapEvents({ onBoundsChange }) {
    const map = useMapEvents({
        moveend: () => {
            const bounds = map.getBounds();
            onBoundsChange({
                minLat: bounds.getSouthWest().lat,
                minLng: bounds.getSouthWest().lng,
                maxLat: bounds.getNorthEast().lat,
                maxLng: bounds.getNorthEast().lng,
            });
        },
    });

    useEffect(() => {
        // Trigger initial search
        const bounds = map.getBounds();
        onBoundsChange({
            minLat: bounds.getSouthWest().lat,
            minLng: bounds.getSouthWest().lng,
            maxLat: bounds.getNorthEast().lat,
            maxLng: bounds.getNorthEast().lng,
        });
    }, [map]); // Depend on map instance

    return null;
}

const BirdMap = ({ onSelectBird }) => {
    const [birds, setBirds] = useState([]);
    const [loading, setLoading] = useState(false);

    // Initial load - Global view
    const startPosition = [20, 0]; // Centered roughly on equator/prime meridian for global view

    const handleBoundsChange = async (bbox) => {
        setLoading(true);
        const results = await searchBirdsInBox(bbox);
        setBirds(results);
        setLoading(false);
    };

    return (
        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            <MapContainer center={startPosition} zoom={2} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEvents onBoundsChange={handleBoundsChange} />

                {birds.map((bird) => (
                    <Marker
                        key={bird.id}
                        position={[bird.lat || startPosition[0], bird.lng || startPosition[1]]}
                        eventHandlers={{
                            click: () => onSelectBird(bird),
                        }}
                    >
                    </Marker>
                ))}
            </MapContainer>

            {loading && (
                <div className="glass-panel" style={{
                    position: 'absolute', top: 20, right: 20, padding: '10px 20px', zIndex: 1000,
                    color: 'var(--accent-color)', fontWeight: 'bold'
                }}>
                    Scanning for birds...
                </div>
            )}
        </div>
    );
};

export default BirdMap;
