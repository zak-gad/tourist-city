import  { useEffect, useState } from 'react';
import './Activities.css';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('/api/activities')
            .then(response => response.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <div>
            <h2>Activities</h2>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        <h3>{activity.name}</h3>
                        <p>{activity.description}</p>
                        <button>Sign Up</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Activities;
