import { useEffect, useState } from 'react';
import './Events.css';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5003/api/events', {method:'GET'})
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setEvents(data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    return (
        <div>
            <h2>Events</h2>
            <p> { JSON.stringify(events)}</p>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <button>RSVP</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
