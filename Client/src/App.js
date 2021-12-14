import React, { useEffect, useMemo, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/Pages/Home/Home';
import Multiplayer from '../src/Pages/Multiplayer/Multiplayer';
import Profile from '../src/Pages/Profile/Profile';
import Leaderboard from './Pages/Leaderboard/Leaderboard';
import AboutUs from '../src/Pages/AboutUs/AboutUs';
import Login from '../src/Pages/Login/Login';
import Signup from '../src/Pages/Signup/Signup';

function Parent() {
  const [parentName, setParentName] = useState(null);
  const [parentUser, setParentUser] = useState(null);
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home parentName={parentName} parentUser={parentUser}/>} />
                <Route path='/multiplayer' element={<Multiplayer parentName={parentName} parentUser={parentUser}/>} />
                <Route path='/leaderboard' element={<Leaderboard parentName={parentName} parentUser={parentUser}/>} />
                <Route path='/profile/:id' element={<Profile parentName={parentName} parentUser={parentUser}/>} />
                <Route path='/aboutus' element={<AboutUs parentName={parentName} parentUser={parentUser}/>} />
                <Route path='/login' element={<Login  setParentName={setParentName} setParentUser={setParentUser}/>} />
                <Route path='/signup' element={<Signup  setParentName={setParentName} setParentUser={setParentUser}/>} />
            </Routes>
        </Router>
    );
};

export default Parent;
