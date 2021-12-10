import React from 'react';
import './Signup.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Keccak } from 'sha3';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                      fName: '',
                      lName: '',
                      uName: '',
                      pass:'',
                      visiblity: 'password'
                      };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hashMe(pass) {
      const hash = new Keccak(256);
      hash.reset();
      hash.update(pass);
      const pass1 = hash.digest('hex');
      hash.reset();
      const pepper = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65));
      hash.update(pass1).update(pepper);
      const temp = hash.digest('hex');
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

    render() {
        return (
            <div className="Signup">
                <Navbar />
                <p>Sunrise</p>
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

export default Signup;
