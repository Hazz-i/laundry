import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon
const customMarkerIcon = L.icon({
    iconUrl: "path/to/custom-marker-icon.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const Maps: React.FC = () => {
    const position: [number, number] = [-7.7955798, 110.3694896]; // Koordinat Shifa Laundry

    return (
        <MapContainer
            center={position}
            zoom={15}
            style={{ height: "400px", width: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={customMarkerIcon}>
                <Popup>
                    <strong>Shifa Laundry</strong>
                    <br />
                    Yogyakarta, Indonesia
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Maps;
