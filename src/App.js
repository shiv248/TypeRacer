import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/Pages/Home/Home';
import Multiplayer from '../src/Pages/Multiplayer/Multiplayer';
import Profile from '../src/Pages/Profile/Profile';
import AboutUs from '../src/Pages/AboutUs/AboutUs';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/multiplayer' element={<Multiplayer/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/aboutus' element={<AboutUs/>} />
            </Routes>
        </Router>
    );
};

export default App;
