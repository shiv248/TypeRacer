import './Multiplayer.css';
import Navbar from '../../Components/Navbar/Navbar';
import LoadingBar from '../../Components/LoadingBar/LoadingBar';

function Multiplayer(props) {
  return (
    <div className="Multiplayer">
      <Navbar fName={props.parentUser}/>
      <div className="Multiplayer-container">
        <div className="display">
          <LoadingBar loadingData={30}/>
          <LoadingBar />
          <LoadingBar />
          <LoadingBar />
          <LoadingBar />
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Multiplayer;
