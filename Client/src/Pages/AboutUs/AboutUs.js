import React from 'react';
import './AboutUs.css';
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="AboutUs">
        <Navbar />
        <div className="grid">
          <Matches />
          <div className="AboutUs-container">
            <div className="display">
              <p>
                <i>Scribing</i> is a website application similar to 10fastfingers and typeracer, where the user can test their typing speed and compare their typing speed against their friends.
                <br /><br />
                <a href='https://www.linkedin.com/in/shiv248/' target="_blank" rel="noreferrer">Shivanshu Gupta</a> and <a href='https://www.linkedin.com/in/trumanjfchan/' target="_blank" rel="noreferrer">Truman Chan</a> created this web app for their UCM Full Stack Computing course.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
