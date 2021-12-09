import React from 'react';
import './Profile.css';
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';
import MIME from '../../Images/Mime.png';

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Navbar />
        <div className="grid">
          <Matches />
          <div className="Profile-container">
            <div className="display">
              <div className='profileinfo'>
                <div className='picture'>
                  <img src={MIME}/>
                </div>
                <div className='info'>
                  <div>Username: fullstack5ever</div>
                  <div>Password: ******</div>
                  <div>Display name: Truman</div>
                  <div>Highest WPM: 76</div>
                </div>
              </div>
              <div className='highscores'>
                <h1>Top 100 Leaderboard (All Time)</h1>
                <div className='scores'>
                  <table>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>WPM</th>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td>Daryl</td>
                      <td>90</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
