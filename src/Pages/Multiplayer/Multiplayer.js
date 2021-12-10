import './Multiplayer.css';
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';
import LoadingBar from '../../Components/LoadingBar/LoadingBar';

function Multiplayer() {
  return (
    <div className="Multiplayer">
      <Navbar />
      <div className="grid">
        <Matches />
        <div className="Multiplayer-container">
          <div className="display">
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
          </div>
          <input type="text" />
        </div>
      </div>
      
    </div>
  );
}

export default Multiplayer;
