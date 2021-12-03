import './Multiplayer.css';
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';

function Multiplayer() {
  return (
    <div className="Multiplayer">
      <Navbar />
      <div className="grid">
        <Matches />
        <div className="Multiplayer-container">
          <div className="display"></div>
        </div>
      </div>
      
    </div>
  );
}

export default Multiplayer;
