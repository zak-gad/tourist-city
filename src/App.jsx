
import Events from './components/Events';
// import Trips from './components/Trips';
// import Activities from './components/Activities';
import './App.css'; // Ensure to import your CSS file
import {  Outlet, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
    return (
       <>
        <Outlet />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/events' element={<Events />} />
        </Routes>
       </>
    );
};

export default App;