import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Character_Typing.gif';

function Navbar() {
  return (
    <div className="Navbar">
        <div className="Branding">
          <img src={ Logo } alt="Character Typing"/>
          <div>Scribing</div>
        </div>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/multiplayer">Multiplayer</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
        </ul>

        <div className="UserInfo">
          <div>Welcome, Guest!</div>
          <button>Login / Signup</button>
        </div>
    </div>
  );
}

export default Navbar;
