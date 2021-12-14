import React from 'react';
import { Navigate } from "react-router-dom";
import './Signup.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Keccak } from 'sha3';
const axios = require('axios');

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                      fName: '',
                      lName: '',
                      uName: '',
                      pass:'',
                      visiblity: 'password',
                      redirect: false,
                      };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hashMe(pass) {
      console.log("original: " + pass);
      const hash = new Keccak(256);
      hash.reset();
      hash.update(pass);
      const pass1 = hash.digest('hex');
      console.log("hash1: " + pass1);
      hash.reset();
      const pepper = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
      console.log("pepper: " + pepper)
      const pass2  = pass1 + pepper;
      console.log("hash1 + pepper: " + pass2);
      hash.update(pass2);
      const temp = hash.digest('hex');
      console.log("hash2: " + temp);
      return temp;
    }


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
      axios.post('/signUpUser', {
        firstName: this.state.fName,
        lastName: this.state.lName,
        userName: this.state.uName,
        password: this.state.pass
      })
      .then(function (response) {
        let res = response.data;
        if(res.result === "access granted!"){
          localStorage.setItem('jswtoken', res.jwtoken);
          this.props.setParentUser(res.userName);
          this.props.setParentName([this.fName,this.lName]);
          this.setState({
            redirect: true
          })
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
      event.preventDefault();
    };

    togglePasswordVisiblity = () => {
        this.setState(
          {
              visiblity: this.state.visiblity === "password" ? "text" : "password"
          }
        )
    }

      render() {
        if(this.state.redirect){
          return <Navigate
            to={{
              pathname: "/",
              state: { jswt: "hello" }
            }} />
        }else{
          return (
              <div className="Signup">
                  <Navbar />
                  <div className="form-container">
                      <h1>Sign Up</h1>
                      <form className="grid" onSubmit={this.handleSubmit}>
                          <label>First Name:</label>
                          <input name="fName" type="text" value={this.state.fName} onChange={this.handleChange} />
                          <label>Last Name:</label>
                          <input name="lName" type="text" value={this.state.lName} onChange={this.handleChange} />
                          <label>Username:</label>
                          <input name="uName" type="text" value={this.state.uName} onChange={this.handleChange} />
                          <label>Password:</label>
                          <input name="pass" type={this.state.visiblity} value={this.state.value} onChange={this.handleChange} />
                          <input type="checkbox" onClick={this.togglePasswordVisiblity} />
                          <input type="submit" value="Submit" />
                      </form>
                  </div>
              </div>
          );
      }
  }
}

export default Signup;
