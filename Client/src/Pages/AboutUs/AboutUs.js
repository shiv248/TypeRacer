import React from 'react';
import './AboutUs.css';
import Navbar from '../../Components/Navbar/Navbar';

class AboutUs extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div className="AboutUs">
        <Navbar fName={this.props.parentUser}/>
        <div className="AboutUs-container">
          <p>
            <i>Scribing</i> is a website application similar to 10fastfingers and typeracer, where the user can test their typing speed and compare their typing speed against their friends.
            <br /><br />
            <a href='https://www.linkedin.com/in/shiv248/' target="_blank" rel="noreferrer">Shivanshu Gupta</a> and <a href='https://www.linkedin.com/in/trumanjfchan/' target="_blank" rel="noreferrer">Truman Chan</a> created this web app for their UCM Full Stack Computing course.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
