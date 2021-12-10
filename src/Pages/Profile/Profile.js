import React from 'react';
import './Profile.css';
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';
import MIME from '../../Images/Mime.png';

class Profile extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
                    fName: 'Truman',
                    lName: 'Chan',
                    uName: 'fullstack5ever',
                    topWPM: 76,
                    confirmPass: '',
                    newPass:'',
                    visiblity: 'password',
                    leaderboard: [
                                  { name: "Daryl Philbin",
                                    wpm:94
                                  },
                                  { name: "Sheryl Filbin",
                                    wpm:101
                                  },
                                  { name: "Shelly Cho",
                                    wpm:71
                                  },
                                  { name: "Chelly Dho",
                                    wpm:121
                                  }
                                ],
                    };
      //this.handleChange = this.handleChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
  }
/*
  handleChange(event) {
      const target = event.target;
      const value = target.value;
      const object = target.name;
      this.setState(
        {
          [object]: object === "pass" ? this.hashMe(value) : value,
        }
      );
    }


  handleSubmit(event) {
      alert('the password was submitted: ' + this.state.pass);
      event.preventDefault();
  };

  togglePasswordVisiblity = () => {
      this.setState(
        {
            visiblity: this.state.visiblity === "password" ? "text" : "password"
        }
      )
  }
*/
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
                  <img alt="Mime" src={MIME}/>
                </div>
                <div className='info'>
                  <div>Username: {this.state.uName}</div>
                  <div>Display name: {this.state.fName + " " + this.state.lName}</div>
                  <div>Highest WPM: {this.state.topWPM}</div>
                </div>
              </div>
              <div className='highscores'>
                <h1>Top 10 Leaderboard (All Time)</h1>
                <div className='scores'>
                  <table>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>WPM</th>
                    </tr>

                    {this.state.leaderboard.map((person, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{person.name}</td>
                        <td>{person.wpm}</td>
                      </tr>
                    ))}
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
