import './Navbar.css';
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../Images/Character_Typing.gif';

function Navbar(props) {
  const [fName, setFirstName] = useState(null);

  useEffect( () => {
    setFirstName(props.fName)
  }, [props.fName])

  const refreshPage = () => {
    window.location.reload();
  };


  if (fName != null) {
    return (
      <div className="Navbar">
        <div className="Branding">
          <div>Scribing</div>
          <img src={ Logo } alt="Character Typing"/>
        </div>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/multiplayer">Multiplayer</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
        </ul>

        <div className="UserInfo">
          <div className="welcome">Welcome, <Link to={"/profile/"+fName}>{fName}</Link>!</div> 
          <div className="navbar-logout-container">
            <button className="logout-button" onClick={refreshPage}>Log out</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Navbar">
        <div className="Branding">
        <div>Scribing</div>
        <img src={ Logo } alt="Character Typing"/>
        </div>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/multiplayer">Multiplayer</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
        </ul>

        <div className="UserInfo">
          <div className='welcome'>Welcome, Guest!</div>
          <div className="navbar-grid">
            <button className="login-button"><Link to="/login">Log in</Link></button>
            <button className="signup-button"><Link to="/signup">Sign up</Link></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
