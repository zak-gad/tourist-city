import  { useEffect, useState } from 'react';
import './Trips.css';

const Trips = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch('/api/trips')
            .then(response => response.json())
            .then(data => setTrips(data));
    }, []);

    return (
        <div>
            <h2>Trips</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.name}</h3>
                        <p>{trip.description}</p>
                        <button>Book Now</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Trips;
