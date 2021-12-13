import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/Pages/Home/Home';
import Multiplayer from '../src/Pages/Multiplayer/Multiplayer';
import Profile from '../src/Pages/Profile/Profile';
import TopOneHundo from '../src/Pages/TopOneHundo/TopOneHundo';
import AboutUs from '../src/Pages/AboutUs/AboutUs';
import Login from '../src/Pages/Login/Login';
import Signup from '../src/Pages/Signup/Signup';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/multiplayer' element={<Multiplayer/>} />
                <Route path='/profile' element={<TopOneHundo/>} />
                <Route path='/profile/:id' element={<Profile/>} />
                <Route path='/aboutus' element={<AboutUs/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
        </Router>
    );
};

export default App;
