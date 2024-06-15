import React, { useState, useEffect } from "react";

interface Location {
    latitude: number;
    longitude: number;
}

const UserLocation: React.FC = () => {
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div>
            {location ? (
                <p>
                    Latitude: {location.latitude}, Longitude:{" "}
                    {location.longitude}
                </p>
            ) : (
                <p>Loading location...</p>
            )}
        </div>
    );
};

export default UserLocation;
