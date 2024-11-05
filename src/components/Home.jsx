import Events from './Events';
import Trips from './Trips';
import Activities from './Activities';
import '../App.css'; // Ensure to import your CSS file
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        
        <div className="app-container">
            
            <nav>
                <ul className="nav-list">
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/trips">Trips</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                </ul>
            </nav>
            <div className='grid-container'>
                <h1>Welcome to the Tourist City!</h1>
                <img className='cover-photo' src="../city.jpg" alt="" />

            </div>
            <div className="grid-container">
                <section id="events" className="grid-item">
                    <Events />
                </section>
                <section id="trips" className="grid-item">
                    <Trips />
                </section>
                <section id="activities" className="grid-item">
                    <Activities />
                </section>
            </div>
        </div>
    );
};

export default Home;