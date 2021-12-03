import './Profile.css';
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';

function Profile() {
  return (
    <div className="Profile">
      <Navbar />
      <div className="grid">
        <Matches />
        <div className="Profile-container">
          <div className="display"></div>
        </div>
      </div>
      
    </div>
  );
}

export default Profile;
