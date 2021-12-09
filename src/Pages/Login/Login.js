import React, { myFunction } from 'react';
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Keccak } from 'sha3';


class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
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
    hash.update(pass); //add the value to be hashed
    const temp = hash.digest('hex'); //hash the value
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
            <div className="Login">
                <Navbar />
                <p>Sundown</p>
                <div className="form-container">
                    <h1>Log In</h1>
                    <form className="grid" onSubmit={this.handleSubmit}>
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

export default Login;
