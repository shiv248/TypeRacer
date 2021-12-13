import React from 'react';
import { useParams } from "react-router-dom";
import './Profile.css';
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';
import MIME from '../../Images/Mime.png';
const axios = require('axios');

class Profile extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
                    fName: '',
                    lName: '',
                    uName: '',
                    topWPM: null,
                    confirmPass: '',
                    newPass:'',
                    visiblity: 'password',
                    results: []
                    };

      //this.handleChange = this.handleChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
      this.getUserInfo = this.getUserInfo.bind(this);
      this.parseNameDateTime = this.parseNameDateTime.bind(this);
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
  parseNameDateTime(data){
    console.log(data[0]);
    return [];
  }

  getUserInfo(){
    axios.get('/user', {
      userName: "shiv248"
    })
    .then(function (response) {
      console.log(response);
      let res = response.data;
      this.setState({
        res: this.parseNameDateTime(res)
      })
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
